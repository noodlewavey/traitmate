import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyProfile from './pages/MyProfile';
import { Box } from '@mui/material';
import ProfileCreation from './pages/ProfileCreation';
import styled from '@emotion/styled';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; 
import { QuizProvider } from './components/QuizContext';

const theme = createTheme({
  palette: {
    background: {
      default: '#dfd3bc',
    },
    text: {
      primary: '#000000',
    },

    accent: {
      main: '#002fff',
      accent1: '#0018bc',
      accent2: '#0a2381',
      accent3: '#00114d',
      accent4: '#000000',
    }
  },
  typography: {
    fontFamily: 'IBM Plex Mono, Display Regular, Display Italic, Display Light Italic, Display Bold Italic, Display Bold, monospace',
    body1: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 400,
      fontSize: '0.91rem',
    },
    body2: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 300,
      fontSize: '0.85rem',
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
    h3:{
      fontFamily: 'DisplayLight, serif'
    },
    button: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 600,
    }
  },
});

const questions = [
  {
    id: 1,
    text: "I am the life of the party"
  },
  {
    id: 2,
    text: "I feel little concern for others"
  },
  {
    id: 3,
    text: "I am always prepared"
  },
  {
    id: 4,
    text: "I have a high self esteem'"
  }
]

const MainContainer = styled(Box)({
  minWidth: '80rem', // or your desired value
  minHeight: '45rem', // or your desired value
  overflow: 'auto'
});

//THIS WAS THE FIX
//I NEEDED MAIN CONTAINER TO PREVENT CHILD ELEMENTS FROM RESIING



function App() {
  return (
    <QuizProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainContainer>
        <Routes>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<ProfileCreation />} />
          <Route path="/quiz/:questionId" element={<QuizPage questions={questions}/> }  />
          {/* accidentally named questionId as questoinIndex */}
          {/* /this :questionIndex is a dynamic parameter!  */}
          {/* 
No, the :questionIndex in the route <Route path="/quiz/:questionIndex" ... /> is a dynamic route parameter, which means it can represent any value you provide in the URL. It doesn't automatically set the page to be 1.

For example:

If you navigate to /quiz/1, then questionIndex will be 1.
If you navigate to /quiz/2, then questionIndex will be 2.
... and so on.*/}
     
        </Routes> 
        </MainContainer>
      </Router>
    </ThemeProvider>
    </QuizProvider>
  );
}


export default App;


//setting maxWidth to none makes it take up the whole space!!!