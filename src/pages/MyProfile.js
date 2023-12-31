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

function MyProfile() {

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
        <ProfileTemplate />
        {/* <IconButton 
          aria-label="dislike" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '60%',                    // half the height of the viewport
            left: '1rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
        >
          <DeleteForeverIcon style={{ fontSize: '6rem' }}/>
        </IconButton>
        <IconButton 
          aria-label="like" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '60%',                    // half the height of the viewport
            right: '1rem',                 // 1rem from the right edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
        >
          <FavoriteBorderIcon style={{ fontSize: '6rem' }}/>
        </IconButton> */}
        <IconButton 
          aria-label="dislike" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '59%',                    // half the height of the viewport
            left: '13.5rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
        >
          <TrashIcon height="115rem" width="115rem"/>
        </IconButton>
        <IconButton 
          aria-label="like" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '60%',                    // half the height of the viewport
            right: '14rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
        >
          <HeartIcon height="90rem" width="90rem"/>
        </IconButton>
      </Box>
      </motion.div>
  );
}


export default MyProfile;