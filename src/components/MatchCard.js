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
import {Link} from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import FadeInWrapper from './FadeInWrapper';

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
        fontSize:"0.55rem"
      }));


  return (
    <FadeInWrapper>
        <MyStack>
        <Box display="flex" width="100%">
            <Box flexGrow={1}>
            <Root>
        <Box display="flex" justifyContent="space-between">
          <MyStack>
            <MessageIcon fontSize="1.5rem"/>
            <StyledText sx={{width:'120px'}}>INSTA:<b>@{userEntity.instagram}</b></StyledText> 
            </MyStack>
            </Box>
          
              <MyStack>
                <PhoneInTalkIcon fontSize="1.5rem"/>
            <StyledText>CELL#:<b>{userEntity.phoneNumber ? userEntity.phoneNumber : "N/A"}</b></StyledText>  
              </MyStack>
              
            <MyStack>
              <CenterFocusWeakIcon fontSize="1.5rem" />
                <Link to={`/profile/${userEntity.username}`}> 
            <StyledText><b>VIEW FULL PROFILE</b></StyledText>
            </Link>
            </MyStack>
           
            </Root>
            </Box>
            <MatchCardProfilePhoto imageUrl="/heart.gif" marginTop="-15rem"/>
            <MatchCardProfilePhoto imageUrl={`data:image/jpeg;base64,${userEntity.profileImage}`} paddingTop="-35rem"/> 
            </Box>
        </MyStack>
        </FadeInWrapper>
  );
}


export default MatchCard;