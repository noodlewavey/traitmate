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
import Dropdown from '../components/Dropdown.js';
import UploadPhoto from '../components/UploadPhoto.js';
import AnimatedTextWord from '../components/AnimatedTextWord.js';
import TypewriterComponent from 'typewriter-effect';
import CloseButton from '../components/CloseButton.js';


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
    //overflowx: 'hidden',
    //overflowy: 'hidden',
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
    //overflowx: 'hidden',
    ////overflowy: 'hidden',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowx: 'hidden' and //overflowy: 'hidden': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  
  const SubmitButton = styled.button({
    backgroundColor: 'transparent',   // Makes the button background transparent
    border: 'none',                   // Removes the default button border
    cursor: 'pointer',                // Changes the cursor to a hand when hovering over the button
    fontSize: '8rem',                 // Increases the font size
    marginBottom: '2rem',             // Shifts the button down by adding margin at the bottom
    '&:hover': {
      opacity: 0.4                    // Makes the button slightly transparent when hovered
    },
    '&:focus': {
      outline: 'none'                 // Removes the blue outline when the button is focused
    }
  });
  

  const slideVariants = {
    hidden: {
      y: '-100%',  // starting from a position above the initial position
      opacity: 0
    },
    visible: {
      y: '0%',    // end at the initial position
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const HeaderWrapper = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
    fontStyle: 'italic',
    fontSize: '8rem',
    color: theme.palette.accent.main,  // Accessing the accent.main color
  // other styles for your component
    lineHeight: '0.9',
    marginLeft: '3rem', 
    wordWrap:"break-word", 
    overflowWrap: "break-word",
     marginBottom: '5rem',
     marginTop: '0.7rem'
  }));

// you can add styling on top of navbar to position it!

export default function Create3({children}) {

 
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
    <CloseButton />
      <LeftBox>
      <HeaderWrapper>
        <TypewriterComponent
      options={{
        delay: 50,
      }}
    onInit={(typewriter) => {
      typewriter.typeString('Smile for the camera!')
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
        </HeaderWrapper>  

      </LeftBox>
        <RightBox justify="yes">
            <UploadPhoto />
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}