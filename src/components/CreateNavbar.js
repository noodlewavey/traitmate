import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled('div')({
  width: '80rem',
  height: '4rem', // Set the height to 4rem 
  // Add any other styling you need for the navbar
  position: 'fixed',
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

const NavbarLogo = styled(Typography)`
  flex-grow: 1;
  cursor: pointer;
  color: white;
`;

const NavbarNavlinks = styled.div`
display: flex;
flex: 1;
justify-content: space-between; /* Spread items evenly */
align-items: center;
margin: 10rem 10rem;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 4.2rem; 
  // this margin left shifts the quit key 
  &:hover {
    color: blue;
    border-bottom: 1px solid blue;
  }
`;

const LargerFontNavbarLink = styled(NavbarLink)`
  font-size: 2rem; /* Change the font size as needed */
`;

function CreateNavbar() {
  return (
    <NavbarWrapper>
    <NavbarAppBar position="static" elevation={0} sx={{background: '#dfd3bc', maxHeight:'4rem',}}>
      {/* the sx prop has a higher specificity...easier to override styles */}
      <CssBaseline/>
      <NavbarToolbar>
        <NavbarNavlinks>
          <NavbarLink to="/">←BACK</NavbarLink>
          <NavbarLink to="/">QUIT</NavbarLink>
          <LargerFontNavbarLink to="/">NEXT→</LargerFontNavbarLink>
        </NavbarNavlinks>
      </NavbarToolbar>
    </NavbarAppBar>
    </NavbarWrapper>
  );
}

export default CreateNavbar;


