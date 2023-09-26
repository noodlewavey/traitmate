import logo from '../logo.svg';
import CenteredBox from '../components/CenteredBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../index.css';
import ProfileTemplate from '../components/ProfileTemplate';
import {CssBaseline} from '@mui/material';
import '../styles.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete } from '@mui/icons-material';
import Box from '@mui/material/Box';
import MainNavbar from '../components/MainNavbar';
import HeartIcon from '../components/HeartIcon';
import TrashIcon from '../components/TrashIcon';
import {motion} from 'framer-motion';
import MyStack from '../components/MyStack';
import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import MatchCard from '../components/MatchCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {CircularProgress} from '@mui/material';


function Matches() {

    const [matchesList, setMatchesList ] = useState([]);
    const [ userEntities, setUserEntities ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMatches().then(data => {
            setMatchesList(data);

            // Fetch user entities for each match
            const fetchUserEntities = async () => {
                const fetchedEntities = [];
                for (const match of data) {
                    try {
                        const response = await axios.post('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/search-user', {
                            targetUsername: match
                        }, {
                            withCredentials: true
                        });
                        fetchedEntities.push(response.data);
                    } catch (error) {
                        console.error(`There was an error fetching user data for match ${match}:`, error);
                    }
                }
                setUserEntities(fetchedEntities);
                setIsLoading(false);
            };

            fetchUserEntities();
        });
    }, []); 

 
    const fetchMatches = async () => {
        try {
            const response = await axios.get('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/get-matches', {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.error("There was an error fetching the matches:", error);
            return [];
        }
    };
    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(1.2),
        },
      }));

      const StyledText = styled(Typography)(({ theme }) => ({
        ...theme.typography.body2,
      }));


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
      <MainNavbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',     // added to stack items vertically
          justifyContent: 'center',    // center items vertically
          alignItems: 'stretch',        // center items horizontally
          height: '100vh',             // full viewport height
          //padding: '0 1rem',
          position: 'relative',        // relative positioning context for the buttons
        }}
      >
    <CenteredBox>
    { isLoading ? 
        <CircularProgress size={120} 
        style={{ 
            position: 'absolute',
            top: '40%', 
            left: '38%', 
            transform: 'translate(-50%, -50%)'}} /> 
        :
        userEntities.map(user => (
            <MatchCard key={user.id} userEntity={user} />
        ))
    }
     </CenteredBox>
    
      </Box>
      </motion.div>
  );
}


export default Matches;