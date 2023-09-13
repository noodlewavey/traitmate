import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useAuth } from "./AuthContext";
import { useProfile } from "./ProfileContext";

const NavbarWrapper = styled('div')({
  width: '100vw',//adding this centers the navbar
  height: '4rem', // Set the height to 4rem 
  // Add any other styling you need for the navbar
  position: 'fixed',
  overflow: 'hidden',
  zIndex: '1000', //set this to high value to make text hoverable in MyProfile.js
  // i think this overflow auto is what causes it to be fixed size
});

const NavbarAppBar = styled(AppBar)`
  background-color: transparent;
`;

const NavbarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const NavbarNavlinks = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: space-between; /* Spread items evenly */
align-items: center;
margin: 10rem 10rem;
gap: 9rem;
`;

const NavbarLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.body2.fontFamily,
  fontWeight: 300,
  textDecoration: 'none',
  color: 'black',
  '&:hover': {
      color: 'blue',
      borderBottom: '1px solid blue'
  }
}));

function MainNavbar() {

  const {isLoggedIn}=useAuth();
  const {isProfileCreated}=useProfile();

  // in styled, for font weight, remove the brackets
  
  return (
    <NavbarWrapper>
    <NavbarAppBar position="static" elevation={0} sx={{background: '#dfd3bc', maxHeight:'4rem',}}>
      {/* the sx prop has a higher specificity...easier to override styles */}
      <CssBaseline/>
      <NavbarToolbar>
      { isLoggedIn===false && isProfileCreated===false &&
        <NavbarNavlinks>
          <NavbarLink to="/login"><b>LOG IN</b></NavbarLink>
          <NavbarLink to="/"> <b>MAIN</b></NavbarLink>
          <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black'}}>ABOUT THE CREATOR</a>
        </NavbarNavlinks>
        }
        { isLoggedIn===true && isProfileCreated===false &&
        <NavbarNavlinks>
          <NavbarLink to="/logout"><b>LOG OUT</b></NavbarLink>
          <NavbarLink to="/create/1"> <b>CREATE PROFILE</b></NavbarLink>
          <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black'}}>ABOUT THE CREATOR</a>
        </NavbarNavlinks>
        }
        { isLoggedIn===true && isProfileCreated===true &&
        <NavbarNavlinks>
          <NavbarLink to="/logout"><b>LOG OUT</b></NavbarLink>
          <NavbarLink to="/myprofile"> <b>MY PROFILE</b></NavbarLink>
          <NavbarLink to="/match"> <b>FIND YOUR MATCH</b></NavbarLink>
          <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black'}}>ABOUT THE CREATOR</a>
        </NavbarNavlinks>
        }
      </NavbarToolbar>
    </NavbarAppBar>
    </NavbarWrapper>
  );
}

export default MainNavbar;


