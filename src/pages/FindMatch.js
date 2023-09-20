import logo from '../logo.svg';
import CenteredBox from '../components/CenteredBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../index.css';
import ProfileTemplate from '../components/ProfileTemplate';
import {CssBaseline} from '@mui/material';
import '../styles.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete } from '@mui/icons-material';
import Box from '@mui/material/Box';
import MainNavbar from '../components/MainNavbar';
import HeartIcon from '../components/HeartIcon';
import TrashIcon from '../components/TrashIcon';
import {motion} from 'framer-motion';
import { usePersonality } from '../components/PersonalityScoreProvider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {CircularProgress} from '@mui/material';
import SimilarUsers from '../components/SimilarUsers';

function FindMatch() {

  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {personalityScore, setPersonalityScore} = usePersonality();

  
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
      <MainNavbar />
        <SimilarUsers />
      </motion.div>
  );
}

export default FindMatch;