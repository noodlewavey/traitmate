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
import MyStack from '../components/MyStack';
import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import CircularFrame from './CircularFrame';
import MatchCardProfilePhoto from './MatchCardProfilePhoto';
import axios from 'axios';
import {useState, useEffect} from 'react';

function MatchCard({userEntity}) {


    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(1.2),
        },
      }));

      const StyledText = styled(Typography)(({ theme }) => ({
        ...theme.typography.body2,
        fontSize:"0.7rem"
      }));


  return (
        <MyStack>
        <Box display="flex" width="100%">
            <Box flexGrow={1}>
            <Root>
        <Box display="flex" justifyContent="space-between">
            <StyledText>INSTAGRAM:<b>@{userEntity.instagram}</b></StyledText> 
            </Box>
            <Box display="flex" justifyContent="space-between">
            <StyledText>PHONE NUMBER:<b>{userEntity.phoneNumber ? userEntity.phoneNumber : "no phone number given"}</b></StyledText>  
            </Box>
            <Box display="flex" justifyContent="space-between">
            <StyledText><b>VIEW FULL PROFILE</b></StyledText>
            </Box>
            </Root>
            </Box>
            <MatchCardProfilePhoto imageUrl="/heart.gif" />
            <MatchCardProfilePhoto imageUrl={`data:image/jpeg;base64,${userEntity.profileImage}`}/> 
            </Box>
        </MyStack>
  );
}


export default MatchCard;