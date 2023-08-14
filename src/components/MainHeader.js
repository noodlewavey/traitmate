import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


const NavbarWrapper = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: '5rem',
    width: '100vw',
    height: '30rem', // Set the height to 4rem 
    // Add any other styling you need for the navbar
    position: 'fixed',
    overflow: 'hidden',
    alignItems: 'center',
    whiteSpace: 'nowrap', //
    display: 'flex', // added for flexbox
    //look up when to use display flex
    justifyContent: 'center', // horizontal centering in flexbox
    alignItems: 'center', // vertical centering in flexbox
    zIndex: 3000, // set this to a high value to make text hoverable in MyProfile.js
    // i think this overflow auto is what causes it to be fixed size
}));

const OppositesText = styled.span`
    margin-left: 6rem;
  margin-right: 6rem; /* Add right margin between each instance */
`;


function MainHeader() {
    
    return (
      <NavbarWrapper>
        <OppositesText>TRAITMATE</OppositesText>
        <OppositesText>TRAITMATE</OppositesText>
        <OppositesText>TRAITMATE</OppositesText>
      </NavbarWrapper>
    );
  };
  
  export default MainHeader;