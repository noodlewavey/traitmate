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
import { useTheme } from '@emotion/react';
import { useAuth } from '../components/AuthContext.js';
import axios from 'axios';
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
    overflowY: 'scroll',
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
    overflowY: 'scroll',
    justifyContent:'center', //add this to center content 
    alignItems: 'center', //add this to center content
    //if there isnt enough space, parent container forces horizonal scroll
    flexDirection: 'column',
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!

const SubmitButton = styled.button(({ theme }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '8rem',
    fontFamily: theme.typography.h1.fontFamily, // Use theme here
    marginBottom: '2rem',
    '&:hover': {
      opacity: 0.4
    },
    '&:focus': {
      outline: 'none'
    }
}));

//still need to add log out api call!!!!
//also need to change the isloggedin
//change the contexts for global state update....
//im too lazy!!!!




export default function LogoutPage() {

const {isLoggedIn, setIsLoggedIn} = useAuth();

const theme = useTheme();

const navigate = useNavigate();

const handleLogout = async () => {
  if (isLoggedIn === false){
    console.log("Need to log out");
    return;
  }

  // Logic for login
  try {
    const emptyRequest = {
      //sending no body
    };


    const config = {
      headers: {
        'Content-Type': 'application/json', // Set the request header to JSON
      },
    };

    const response = await axios.post('${process.env.REACT_APP_API_ENDPOINT}/auth/logout', emptyRequest, config);

    if (response.status === 200) {
      // Successful logout
      console.log('Logged out successfully!');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      // Handle logout
      console.error('Logout failed');
    
    }
  } catch (error) {
    // Handle other errors
    console.error('Error during logout', error);
  }
};

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    <MainNavbar></MainNavbar>
    <CenterContainer>
        <SubmitButton onClick={handleLogout}>LOG OUT HERE</SubmitButton>
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