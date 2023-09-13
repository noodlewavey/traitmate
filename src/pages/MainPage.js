import React from "react";
import MainHeader from "../components/MainHeader";
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import MainNavbar from "../components/MainNavbar";


const FullPageCenter = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Set the minimum height to 100% of the viewport height
    zIndex: 1,
    //position: 'relative', //ensure relative positioning for stacking context
  });
  
  
  const Wrapper = styled('div')({
      justifyContent: 'center',
      alignItems: 'center',
      height: '45rem',
      width: '100%',
      overflowX: 'scroll',
      overflowY: 'scroll',
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
      minHeight: '98%',
      height: '98%',
      margin: 'auto',
      marginTop: '2rem',
      overflowX: 'scroll',
      border: '1px solid black',
      zIndex: -1,
      overflowY: 'scroll',
      //if there isnt enough space, parent container forces horizonal scroll
    }));
  

function MainPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper> 
    <CenterContainer> 
    <MainHeader />
    <MainNavbar sx={{zIndex: 3000}} />
    </CenterContainer>
    </Wrapper> 
    </FullPageCenter> 
   </motion.div>
  );
}


export default MainPage;
