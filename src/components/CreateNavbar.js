import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarAppBar = styled(AppBar)`
  background-color: transparent;
`;

const NavbarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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
  margin-left: 20px;
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
    <NavbarAppBar position="static" elevation={0} sx={{background: '#dfd3bc', maxHeight:'4rem',}}>
      {/* the sx prop has a higher specificity...easier to override styles */}
      <CssBaseline />
      <NavbarToolbar>
        <NavbarNavlinks>
          <NavbarLink to="/">←BACK</NavbarLink>
          <NavbarLink to="/">QUIT</NavbarLink>
          <LargerFontNavbarLink to="/">NEXT→</LargerFontNavbarLink>
        </NavbarNavlinks>
      </NavbarToolbar>
    </NavbarAppBar>
  );
}

export default CreateNavbar;


