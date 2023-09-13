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
import LoginPage from './LoginPage';
import {useSelector} from 'react-redux';
import Create1 from './Create1';
import Create2 from './Create2';
import Create3 from './Create3';
import { AuthProvider } from '../components/AuthContext';
import { ProfileProvider } from '../components/ProfileContext';
import { ImageUploadProvider } from '../components/ImageUploadContext';

function AppContent() {
    const location = useLocation();

    const { isAuthenticated, user } = useSelector(state => state.auth);

   //Use the isAuthenticated state to conditionally render components based on the user's authentication status.


    const MainContainer = styled(Box)({
        minWidth: '80rem', // or your desired value
        minHeight: '45rem', // or your desired value
        overflow: 'auto'
      });
      
      const questions = [
        { id: 1, text: "I am the life of the party." },
        { id: 2, text: "I feel little concern for others." },
        { id: 3, text: "I am always prepared." },
        { id: 4, text: "I get stressed out easily." },
        { id: 5, text: "I have a rich vocabulary." },
        { id: 6, text: "I don't talk a lot." },
        { id: 7, text: "I am interested in people." },
        { id: 8, text: "I leave my belongings around." },
        { id: 9, text: "I am relaxed most of the time." },
        { id: 10, text: "I have difficulty understanding abstract ideas." },
        { id: 11, text: "I feel comfortable around people." },
        { id: 12, text: "I insult people." },
        { id: 13, text: "I pay attention to details." },
        { id: 14, text: "I worry about things." },
        { id: 15, text: "I have a vivid imagination." },
        { id: 16, text: "I keep in the background." },
        { id: 17, text: "I sympathize with others' feelings." },
        { id: 18, text: "I make a mess of things." },
        { id: 19, text: "I seldom feel blue." },
        { id: 20, text: "I am not interested in abstract ideas." },
        { id: 21, text: "I start conversations." },
        { id: 22, text: "I am not interested in other people's problems." },
        { id: 23, text: "I get chores done right away." },
        { id: 24, text: "I am easily disturbed." },
        { id: 25, text: "I have excellent ideas." },
        { id: 26, text: "I have little to say." },
        { id: 27, text: "I have a soft heart." },
        { id: 28, text: "I often forget to put things back in their proper place." },
        { id: 29, text: "I get upset easily." },
        { id: 30, text: "I do not have a good imagination." },
        { id: 31, text: "I talk to a lot of different people at parties." },
        { id: 32, text: "I am not really interested in others." },
        { id: 33, text: "I like order." },
        { id: 34, text: "I change my mood a lot." },
        { id: 35, text: "I am quick to understand things." },
        { id: 36, text: "I don't like to draw attention to myself." },
        { id: 37, text: "I take time out for others." },
        { id: 38, text: "I shirk my duties." },
        { id: 39, text: "I have frequent mood swings." },
        { id: 40, text: "I use difficult words." },
        { id: 41, text: "I don't mind being the center of attention." },
        { id: 42, text: "I feel others' emotions." },
        { id: 43, text: "I follow a schedule." },
        { id: 44, text: "I get irritated easily." },
        { id: 45, text: "I spend time reflecting on things." },
        { id: 46, text: "I am quiet around strangers." },
        { id: 47, text: "I make people feel at ease." },
        { id: 48, text: "I am exacting in my work." },
        { id: 49, text: "I often feel blue." },
        { id: 50, text: "I am full of ideas." }
    ];
    

    return (
    <AnimatePresence>
      <MainContainer>
      <AuthProvider>
      <ImageUploadProvider>
        <ProfileProvider>
            <Routes location={location} key={location.pathname}>
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/create" element={<ProfileCreation />} />
              <Route path = "/create/1" element ={<Create1 />} />
              <Route path = "/create/2" element ={<Create2 />} />
              <Route path = "/create/3" element ={<Create3 />} />
              <Route path="/quiz/:questionId" element={<QuizPage questions={questions}/> }  />
                <Route path="/resultsquiz" element={<ResultsQuiz />}/>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            </ProfileProvider>
            </ImageUploadProvider>
            </AuthProvider>
      </MainContainer>
      </AnimatePresence>
    );
  }
  

  export default AppContent;