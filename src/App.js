import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyProfile from './pages/MyProfile';
import { Box } from '@mui/material';
import ProfileCreation from './pages/ProfileCreation';
import styled from '@emotion/styled';

const theme = createTheme({
  palette: {
    background: {
      default: '#dfd3bc',
    },
    text: {
      primary: 'black',
    },

    accent: {
      main: '#002fff',
      accent1: '#0018bc',
      accent2: '#0a2381',
      accent3: '#00114d',
      accent4: 'black',
    }
  },
  typography: {
    fontFamily: 'IBM Plex Mono, Display Regular, Display Italic, Display Light Italic, Display Bold Italic, Display Bold, monospace',
    body1: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 300,
    },
    light:{
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 200,
    },
    h1: {
      fontFamily:'DisplayLightItalic, serif',
    },
    h2:{
      fontFamily: 'DisplayItalic, serif',
    },
    button: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 600,
    }
  },
});

const MainContainer = styled(Box)({
  minWidth: '80rem', // or your desired value
  minHeight: '45rem', // or your desired value
  overflow: 'auto'
});

//THIS WAS THE FIX
//I NEEDED MAIN CONTAINER TO PREVENT CHILD ELEMENTS FROM RESIING



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainContainer>
        <Routes>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/create" element={<ProfileCreation />} />
        </Routes>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}


export default App;


//setting maxWidth to none makes it take up the whole space!!!