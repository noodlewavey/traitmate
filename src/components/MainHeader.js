import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import TypewriterComponent from "typewriter-effect";


const NavbarWrapper = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: '5rem',
    width: '100%', //before, 100vw was causing text to be covered
    height: '30rem', // Set the height to 4rem 
    // Add any other styling you need for the navbar
    position: 'relative',
    marginTop: '-2rem',
    alignItems: 'center',
    whiteSpace: 'nowrap', //
    display: 'flex', // added for flexbox
    //look up when to use display flex
    justifyContent: 'center', // horizontal centering in flexbox
    alignItems: 'center', // vertical centering in flexbox
    zIndex: 0, // set this to a high value to make text hoverable in MyProfile.js
    // i think this overflow auto is what causes it to be fixed size
    gap: '10rem'
}));

const OppositesText = styled.span`
    margin-left: 6rem;
  margin-right: 6rem; /* Add right margin between each instance */
`;


function MainHeader() {
    
    return (
      <NavbarWrapper>
        
        <TypewriterComponent
    options={{
      delay: 50,
    }}
  onInit={(typewriter) => {
    typewriter.typeString('TRAITMATE')
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

<TypewriterComponent
    options={{
      delay: 50,
    }}
  onInit={(typewriter) => {
    typewriter.typeString('TRAITMATE')
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
  
<TypewriterComponent
    options={{
      delay: 50,
    }}
  onInit={(typewriter) => {
    typewriter.typeString('TRAITMATE')
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
      </NavbarWrapper>
    );
  };
  
  export default MainHeader;