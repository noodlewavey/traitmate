
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
import {motion} from 'framer-motion';
import TypewriterComponent from "typewriter-effect";
import {useTheme}from "@mui/material";

const MatchMessage = () => {


    const theme = useTheme();



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

const typewriterStyle = {
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: 300,
    fontSize: theme.typography.body2.fontSize,
    color: theme.typography.body2.color,
    top: "8rem", // Adjust the top position as needed
    width: "300px", // Adjust the width as needed
  };
    

return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 3}}}
    >
        <Box sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexDirection: 'column',
                    alignItems: 'center',      // Vertical centering
                    height: '100vh',           // Occupy full viewport height
                    width: '100vw',            // Occupy full viewport width
                }}>
            <Typography variant="h2" sx={{marginTop: '7rem'}}>It's a match!</Typography>
            <div style={typewriterStyle}>
            <TypewriterComponent
    options={{
      delay: 20,
    }}
  onInit={(typewriter) => {
    typewriter.typeString('You will find their phone number or instagram in the "My Matches" tab!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</div>
<img src="/heart.gif" alt="Heart Animation" />
        </Box>
    </motion.div>
);
};
  
  export default MatchMessage;