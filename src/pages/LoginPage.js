import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.jsx';
import CreateNavbar from '../components/CreateNavbar.js';
import LeftBox from '../components/LeftBox.js'
import { Typography } from "@mui/material"; 
import InputField from '../components/InputFIeld.js';
import {motion} from 'framer-motion';
import { useTheme } from '@emotion/react';
import {Button} from '@mui/material';
import { useState } from 'react';
import SelectError from '../components/SelectError.js';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { login, logout } from '../redux/authSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import LoginForm from '../components/LoginForm.js';
import Stack from '@mui/material/Stack';
import LogButton from '../components/LogButton.js';
import axios from 'axios';


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
    overflowX: 'hidden',
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
    overflowX: 'hidden',
    border: '1px solid black',
    overflowY: 'hidden',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!


export default function LoginPage({children}) {

    const [ token, setToken ] = useState('');

    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');

    const [ activeButton, setActiveButton ] = useState('LOGIN') //default to log in

    const { isAuthenticated, user } = useSelector(state => state.auth);
    //useSelector is reading variable from reducer
    //we want to take these variables from redux state

const theme = useTheme();


const handleRegister = async () => {
    // Logic for registration
    try {
      const registrationDto = {
        username: username,
        password: password,
        // Include other registration data fields here
      };

  
      const config = {
        headers: {
          'Content-Type': 'application/json', // Set the request header to JSON
        },
      };
  
      const response = await axios.post('http://localhost:8080/auth/register', registrationDto, config);
  
      if (response.status === 200) {
        // Successful registration
        console.log('Registration successful!');
      } else {
        // Handle registration failure
        console.error('Registration failed.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during registration:', error);
    }
  };
  
  


  const handleLogin = async () => {
    try {
        const loginDto = {
          username: username,
          password: password,
          // Include other registration data fields here
        };
      
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
  
      const response = await axios.post('http://localhost:8080/auth/login', loginDto, config);
  
      if (response.status === 200) {
        // Successful login
        console.log('Login successful!');
      } else {
        // Handle login failure
        console.error('Login failed.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during login:', error);
    }
  };

  //if spring security session management exists in java backend, dont need to make front end handle sessions
  

const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(document.getElementById("submission"));  // Use event.currentTarget
    const inputUsername = formData.get("username");
    const inputPassword = formData.get("password");
    console.log("this is the formdata's username:" , inputUsername)
    console.log("formdata", Object.fromEntries(formData));

    setUsername(inputUsername);
    setPassword(inputPassword);


    if (activeButton === "LOGIN") {
        handleLogin();
    } else if (activeButton === "REGISTER") {
        handleRegister();
    }
};




  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    <CreateNavbar />
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <LeftBox>
      <ItalicText style={{marginLeft: '6rem', wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>Log in to your account</ItalicText> 
      </LeftBox>
        <RightBox>
            <Stack spacing="1rem" >
            <Box flexDirection="row" style={{ display: 'flex', width: '100%' }} justifyContent="space-between"> 
            {/* the space between is inside the parent stack */}
            <LogButton label="LOGIN" width='9rem' onClick={() => setActiveButton('LOGIN')} isActive={activeButton==='LOGIN'}/>
            <LogButton label="REGISTER" width='9rem' onClick={()=> setActiveButton('REGISTER')} isActive={activeButton==='REGISTER'}/>
            {/* i use isActive...boolean, if true then colors it blue */}
            </Box>
            {/* <Stack spacing="1rem"> don't need this stack */} 
            <form onSubmit={handleSubmit} id="submission">
            <InputField name="username" label="USERNAME" />
            <InputField name="password" label="PASSWORD" />
            <LogButton onClick={handleSubmit} label="submit" color="#000000" style={{flex:1}}/>
            </form>
             {/*the submit button fills the space in the flex component..the stack component   */}
            {/* </Stack> */}
            {/* <AuthContent />  */}
            </Stack>
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}