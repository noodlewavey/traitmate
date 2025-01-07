import React from "react";
import { AppBar, Toolbar, CssBaseline } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { useAuth } from "./AuthContext";
import { AuthProvider } from "./AuthContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled('div')({
  width: '100vw',
  height: '8rem',
  position: 'fixed',
  overflow: 'visible',
  zIndex: '1000',
  pointerEvents: 'auto',
  background: 'linear-gradient(to bottom, #dfd3bc, #dfd3bc, transparent)', // Vertical gradient fade
  padding: '0.25rem 0', // Adjust padding to set border thickness if needed
  boxSizing: 'border-box',
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
  justify-content: space-between;
  margin: 10rem 10rem;
  gap: 9rem;
`;

const NavbarLink = styled(NavLink)(({ theme }) => ({
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: "0.7rem",
  fontWeight: 150,
  color: 'black',
  textDecoration: 'none',
  paddingBottom: '2px',
  borderBottom: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    borderBottom: '1px solid black',
    color: 'black',
  },
  '&:hover': {
    color: 'blue',
    borderBottom: '1px solid blue',
  },
}));


function MainNavbar() {
  const { isLoggedIn, isProfileCreated } = useAuth();
  const location = useLocation();

  // Check if a route is active
  const isActiveRoute = (route) => location.pathname === route;

  return (
    <AuthProvider>
      <NavbarWrapper>
        <NavbarAppBar position="static" elevation={0} sx={{ background: '#dfd3bc', maxHeight: '4rem' }}>
          <CssBaseline />
          <NavbarToolbar>
            {(isLoggedIn === false || isLoggedIn === null) &&
              <NavbarNavlinks>
                <NavbarLink to="/login" isActive={isActiveRoute('/login')}>
                  {isActiveRoute('/login') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px'}} />
                  )}
                  <b> LOG IN</b>
                </NavbarLink>
                <NavbarLink to="/" isActive={isActiveRoute('/')}>
                  {isActiveRoute('/') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px'}} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> MAIN</b>
                </NavbarLink>
                <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black', fontSize: "0.7rem" }}>
                  ABOUT THE CREATOR
                </a>
              </NavbarNavlinks>
            }
            {isLoggedIn === true && isProfileCreated === false &&
              <NavbarNavlinks>
                <NavbarLink to="/logout" isActive={isActiveRoute('/logout')}>
                  {isActiveRoute('/logout') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> LOG OUT</b>
                </NavbarLink>
                <NavbarLink to="/create/1" isActive={isActiveRoute('/create/1')}>
                  {isActiveRoute('/create/1') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px'}} />
                  )}
                  <b> CREATE PROFILE</b>
                </NavbarLink>
                <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black', fontSize: "0.7rem" }}>
                  ABOUT THE CREATOR
                </a>
              </NavbarNavlinks>
            }
            {isLoggedIn === true && isProfileCreated === true &&
              <NavbarNavlinks>
                <NavbarLink to="/logout" isActive={isActiveRoute('/logout')}>
                  {isActiveRoute('/logout') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> LOG OUT</b>
                </NavbarLink>
                <NavbarLink to="/myprofile" isActive={isActiveRoute('/myprofile')}>
                  {isActiveRoute('/myprofile') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px'}} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> MY PROFILE</b>
                </NavbarLink>
                <NavbarLink to="/match" isActive={isActiveRoute('/match')}>
                  {isActiveRoute('/match') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem' , paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> FIND YOUR MATCH</b>
                </NavbarLink>
                <NavbarLink to="/mymatches" isActive={isActiveRoute('/mymatches')}>
                  {isActiveRoute('/mymatches') ? (
                    <FavoriteIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: '0.65rem', paddingRight: '3px' }} />
                  )}
                  <b> MY MATCHES</b>
                </NavbarLink>
                <a href="http://jasminenoodlewavey.vercel.app" style={{ textDecoration: 'none', color: 'black', fontSize: "0.7rem" }}>
                  ABOUT THE CREATOR
                </a>
              </NavbarNavlinks>
            }
          </NavbarToolbar>
        </NavbarAppBar>
      </NavbarWrapper>
    </AuthProvider>
  );
}

export default MainNavbar;
