import React from "react";
import MainHeader from "../components/MainHeader";
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import MainNavbar from "../components/MainNavbar";
import { useAuth } from "../components/AuthContext";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import { useTheme } from "@emotion/react";

const FullPageCenter = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Set the minimum height to 100% of the viewport height
    //position: 'relative', //ensure relative positioning for stacking context
    backgroundImage: 'url("/MOONASSI_16_UNTITLED.png")', // <-- add this line
    backgroundSize: '800px',  // cover ensures the image fills the container without stretching
    backgroundPosition: '17rem bottom',  // center the image
    backgroundRepeat: 'no-repeat',  // don't repeat the image
    position: 'relative',
  });
  
  
  const Wrapper = styled('div')({
       display: 'flex',
       flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '45rem',
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
      marginBottom: '4rem',
      position: 'relative',
     
      // This is important for the absolute positioning of the child.
      
  });
  //this is to prevent resizing....
  
  
  //does putting position of top level copmonent as relative make all the child components, including grandchildren components, relative to the top level component? 
  
  //this is relative position only deals with direct children that are absolutely positioned
  
  //wrapper is outermost container...centers stuff in scree horizontall yand vefitcally
  //overflowing content will be clipped
  //relative means child elements will be positioned relative to wrapper
  const CenterContainer = styled('div')(({ theme }) => ({
      width: '100%',
      display: 'flex', //this ensures marginLeft: auto on right box pushes to right
      flexDirection: 'column',
      minHeight: '98%',
      height: '98%',
      marginTop: '2rem',
      gap: '1rem',
      alignItems: 'center', //centers about y axis
      overflowY: 'hidden',
      //if there isnt enough space, parent container forces horizonal scroll
    }));


  
  
  

function MainPage() {

  const { isLoggedIn, setIsLoggedIn, isProfileCreated, setIsProfileCreated } = useAuth();
  
  const theme = useTheme();


  const typewriterStyle = {
    fontFamily: theme.typography.body2.fontFamily,
    fontSize: theme.typography.body2.fontSize,
    color: theme.typography.body2.color,
    position: "absolute",
    top: "8rem", // Adjust the top position as needed
    width: "600px", // Adjust the width as needed
  };

  useEffect(() => { 

    console.log(isLoggedIn, "am i logged in");
    console.log(isProfileCreated, "do i have a profile created")
      
  }, []);
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.8}}}>
    <FullPageCenter sx={{zIndex: -1000}}>
    <Wrapper>
     <CenterContainer> 
    <MainNavbar sx={{zIndex: 9999 }} />
    {/* <Typography variant="body2" sx={{position: 'absolute', top: '8rem', width: '600px'}}>Take our Big Five personality quiz, and we will show you people who have similar traits. We go beyond looks. Dive into the Big Five!</Typography> */}
    <div style={typewriterStyle}>
    <TypewriterComponent
    options={{
      delay: 50,  
    }}
  onInit={(typewriter) => {
    typewriter.typeString('Take our Big Five personality quiz, and we will show you people who have similar traits. We go beyond looks. Dive into the Big Five!')
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
    <MainHeader /> 
    </CenterContainer>
    </Wrapper> 
    </FullPageCenter> 
   </motion.div>
  );
}


export default MainPage;
