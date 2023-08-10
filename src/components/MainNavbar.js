import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavbarWrapper = styled('div')({
  width: '80rem',
  height: '4rem', // Set the height to 4rem 
  // Add any other styling you need for the navbar
  position: 'fixed',
  overflow: 'auto',
  // i think this overflow auto is what causes it to be fixed size
});

const NavbarAppBar = styled(AppBar)`
  background-color: transparent;
`;

const NavbarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NavbarNavlinks = styled.div`
display: flex;
flex: 1;
justify-content: space-between; /* Spread items evenly */
align-items: center;
margin: 10rem 10rem;
`;

const NavbarLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.body2.fontFamily,
  fontWeight: 300,
  textDecoration: 'none',
  color: 'black',
  marginLeft: '7.8rem',
  '&:hover': {
      color: 'blue',
      borderBottom: '1px solid blue'
  }
}));

function MainNavbar() {


  // in styled, for font weight, remove the brackets
  
  return (
    <NavbarWrapper>
    <NavbarAppBar position="static" elevation={0} sx={{background: '#dfd3bc', maxHeight:'4rem',}}>
      {/* the sx prop has a higher specificity...easier to override styles */}
      <CssBaseline/>
      <NavbarToolbar>
        <NavbarNavlinks>
          <NavbarLink to="/"><b>LOG OUT</b></NavbarLink>
          <NavbarLink to="/">BACK TO <b>MAIN</b></NavbarLink>
          <NavbarLink to="/"><b>ABOUT</b></NavbarLink>
        </NavbarNavlinks>
      </NavbarToolbar>
    </NavbarAppBar>
    </NavbarWrapper>
  );
}

export default MainNavbar;


