import React from "react";
import MainHeader from "../components/MainHeader";
import Box from '@mui/material/Box';
import styled from '@emotion/styled';


const FullPageCenter = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Set the minimum height to 100% of the viewport height
    zIndex: 1,
  });
  
  
  const Wrapper = styled('div')({
      justifyContent: 'center',
      alignItems: 'center',
      height: '45rem',
      width: '80rem',
      overflowX: 'hidden',
      overflowY: 'scroll',
      marginBottom: '4rem',
      position: 'relative', // This is important for the absolute positioning of the child.
      zIndex: 1,
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
      zIndex: 2,
      overflowY: 'hidden',
      //if there isnt enough space, parent container forces horizonal scroll
    }));

  

function MainPage() {
  return (
    <div>
    <MainHeader style={{zIndex: 4000}}/>
    <FullPageCenter>
    <Wrapper>
    <CenterContainer>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </div>
  );
}


export default MainPage;
