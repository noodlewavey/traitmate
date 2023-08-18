import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyProfile from './MyProfile';
import { Box } from '@mui/material';
import ProfileCreation from './ProfileCreation'; 
import styled from '@emotion/styled';
import MainPage from './MainPage';
import QuizPage from './QuizPage';
import '../App.css'
import { useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import ResultsQuiz from './ResultsQuiz';


function AppContent() {
    const location = useLocation();

    const MainContainer = styled(Box)({
        minWidth: '80rem', // or your desired value
        minHeight: '45rem', // or your desired value
        overflow: 'auto'
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

    return (
    <AnimatePresence>
      <MainContainer>
            <Routes location={location} key={location.pathname}>
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/create" element={<ProfileCreation />} />
              <Route path="/quiz/:questionId" element={<QuizPage questions={questions}/> }  />
                <Route path="/resultsquiz" element={<ResultsQuiz />}/>
            </Routes>
      </MainContainer>
      </AnimatePresence>
    );
  }
  

  export default AppContent;