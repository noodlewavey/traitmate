import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.js';
import CreateNavbar from '../components/CreateNavbar.js';
import LeftBox from '../components/LeftBox.js'
// import '../styles.css';
// import '../index.css';
import { Typography } from "@mui/material"; 
// this typography import was necessary to use the font?
//ask chatgpt
//apparently its not important?
import InputField from '../components/InputFIeld.js';
import {motion} from 'framer-motion';
import BarResult from '../components/BarResult.js';
//problem is not with import..
import { PersonalityScoreProvider, usePersonality } from '../components/PersonalityScoreProvider.js';
//need to import usepersonality
import MainNavbar from '../components/MainNavbar.js';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const FullPageCenter = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Set the minimum height to 100% of the viewport height
});

//this is to center the content

const ItalicText = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '8rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
  // other styles for your component
  lineHeight: '0.9',
}));


const Wrapper = styled('div')({
    justifyContent: 'center',
    alignItems: 'center',
    height: '45rem',
    width: '80rem',
    overflowX: 'scroll',
    overflowy: 'hidden',
    marginBottom: '4rem',
    position: 'relative', // This is important for the absolute positioning of the child.
});
//this is to prevent resizing....


//does putting position of top level copmonent as relative make all the child components, including grandchildren components, relative to the top level component? 

//this is relative position only deals with direct children that are absolutely positioned

//wrapper is outermost container...centers stuff in scree horizontall yand vefitcally
//overflowing content will be clipped
//relative means child elements will be positioned relative to wrapper
const CenterContainer = styled(Box)(({ theme }) => ({
    width: '98%',
    display: 'flex', //this ensures marginLeft: auto on right box pushes to right
    minHeight: '98%',
    height: '98%',
    margin: 'auto',
    marginTop: '4rem',
    overflowX: 'scroll',
    overflowy: 'hidden',
    justifyContent:'center', //add this to center content 
    alignItems: 'center', //add this to center content
    //if there isnt enough space, parent container forces horizonal scroll
    flexDirection: 'column',
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowy: 'hidden': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!



export default function ResultsQuiz({children}) {
  const {personalityScore, setPersonalityScore} = usePersonality();
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/create/3");

  }

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    <MainNavbar></MainNavbar>
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
        <Typography variant="h1">Your Big 5 Results!</Typography> 
        {personalityScore && (
    <BarResult height={20} width={40} personality={personalityScore}/>
)}
<div sx={{position: 'relative', top: '0rem', display: 'flex', flexDirection: 'column'}}>
<Button
                variant="text"
                style={{
                position: "relative",
                 top: '0rem',
                left: '15rem',
                }}
                onClick={handleNextClick}
              >
                <Typography
                  variant="body2"
                  fontSize="4rem"
                  color="#000000"
                >
                  NEXT →
                </Typography>
              </Button>
              <Typography variant="body2" sx={{position: 'relative', left: '16rem'}}>finish your profile</Typography>
              </div>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    
    </motion.div>
  );
}

//you can define a hook outside function call
//you can only call function or hook inside react function 

//when you define something, you're creating a blueprint
//when callign something, you're excuting it....(setting up state, fetching data, 
//creating a side effect)


//you use styled now instead of makestyles