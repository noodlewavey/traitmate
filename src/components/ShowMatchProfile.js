
import CenteredBox from "./CenteredBox";
import { Typography } from "@mui/material";
import CircularFrame from "./CircularFrame";
import Lyrics from './Lyrics';
import MyStack from './MyStack';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BigFive from "./BigFive";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useRef } from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import CloseMatch from "./CloseMatch";
import FadeInWrapper from "./FadeInWrapper";

const ShowMatchProfile = () => {

    const {username} = useParams();
    const [data, setData] = useState(null);


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

      const universityLocations = {
        "University of Toronto": "Toronto, ON",
        "University of British Columbia": "Vancouver, BC",
        "McGill University": "Montreal, QC",
        "McMaster University": "Hamilton, ON",
        "University of Montreal": "Montreal, QC",
        "Concordia University": "Montreal, QC",
        "Ryerson University": "Toronto, ON",
        "Waterloo University": "Waterloo, ON"
    }

    const HoverStyledText = styled(StyledText)`
    &:hover {
        color: blue;
    }
`;

const StyledLink = styled(Link)`
    color: grey;
    text-decoration: underline;

    &:hover {
        color: blue;
    }
`;

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/search-user', {
                targetUsername: username
            }, {
                withCredentials: true
            });
            
            setData(response.data);
        } catch (error) {
            console.error(`There was an error fetching user data for match ${username}:`, error);
        }
    };
    
    fetchData();
}, []);


    

return (
    <>
        {data ? (
            <FadeInWrapper>
            <CenteredBox>
                <CloseMatch/>
                <CircularFrame imageUrl={`data:image/jpeg;base64,${data.profileImage}`} />
                <Typography variant="h1" style={{ justifyContent: 'center', fontSize: '2rem' }}>
                    {data.firstName}
                </Typography>
                <MyStack>
                    <Root>
                        <Box display="flex" justifyContent="space-between">
                            <StyledText>AGE: {data.age}</StyledText>
                            <StyledText>GENDER: {data.gender}</StyledText>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between">
                            <StyledText>{data.university}</StyledText>
                            <StyledText>{universityLocations[data.university]}</StyledText>
                        </Box>
                    </Root>
                </MyStack>
                <MyStack>
                    <AutoStoriesIcon />
                    <b>MAJOR</b>: {data.major}
                </MyStack>
                <BigFive setting={data.displayQuizResults} userEntity={data.username} />
                <Lyrics content={data.about} />
            </CenteredBox>
            </FadeInWrapper>
        ) : null}
    </>
);
        }

export default ShowMatchProfile;