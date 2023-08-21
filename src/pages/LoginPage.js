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

    const { isAuthenticated, user } = useSelector(state => state.auth);
    //useSelector is reading variable from reducer
    //we want to take these variables from redux state

    //now we need to call redux function with dispathc hook

    const dispatch = useDispatch();

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        document.getElementById("signInDiv").hidden=true;
        dispatch(login(userObject));
    }
  
    useEffect(()=> {
    /*global google*/ 

    //this global google line is necessary
      //this google object is coming from script in html
      google.accounts.id.initialize({
        client_id: "932933342014-p4cq87382tr0jtp898efedto2a74vs1i.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outlined", width: '600px', height: '200px'}
      );

      google.accounts.id.prompt();
  
    }, []);

    function handleSignOut(event) {
        dispatch(logout);
        document.getElementById("signInDiv").hidden = false;
    }
  
const theme = useTheme();


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
            <div id="signInDiv"></div> 
            { Object.keys(user).length != 0 &&
            <Button onClick= { (e) => handleSignOut(e)}>SIGN OUT </Button>
            }
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}
