
import CenteredBox from "./CenteredBox";
import { Typography } from "@mui/material";
import CircularFrame from "./CircularFrame";
import Lyrics from './Lyrics';
import MyStack from './MyStack';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BigFive from "./BigFive";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useRef } from "react";
import {Link} from "react-router-dom";
import BuildIcon from '@mui/icons-material/Build';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FadeInWrapper from './FadeInWrapper';

const MyProfileTemplate = ({data, compatibility}) => {


    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(1.2),
        },
      }));

      const StyledText = styled(Typography)(({ theme }) => ({
        ...theme.typography.body2,
      }));

      const universityLocations = {
        "University of Toronto": "Toronto, ON",
        "University of British Columbia": "Vancouver, BC",
        "McGill University": "Montreal, QC",
        "McMaster University": "Hamilton, ON",
        "University of Montreal": "Montreal, QC",
        "Concordia University": "Montreal, QC",
        "Ryerson University": "Toronto, ON",
        "Waterloo University": "Waterloo, ON"
    }

    const HoverStyledText = styled(StyledText)`
    &:hover {
        color: blue;
    }
`;

const StyledLink = styled(Link)`
    color: grey;
    text-decoration: none;
    font-weight: 300;

    &:hover {
        color: blue;
    }
`;
    

    return (
        <FadeInWrapper>
        <CenteredBox>
            <CircularFrame imageUrl={`data:image/jpeg;base64,${data.profileImage}`}/>
              <Typography variant="h1" style={{justifyContent: 'center', fontSize: '2rem' }}>
  {data.firstName}</Typography>
  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
    <StyledLink to="/create/1" sx={{ color: 'grey'  }}><BuildIcon fontSize="0.4rem"/> EDIT MY PROFILE</StyledLink>
    <StyledLink to="/quiz/1" sx={{ color: 'grey' }}><DriveFileRenameOutlineIcon fontSize="0.4rem" /> RETAKE THE QUIZ</StyledLink>
</Box>
            <MyStack>
                <Root>
                <Box display="flex" justifyContent="space-between">
                <StyledText>AGE: {data.age}</StyledText>
                <StyledText>GENDER: {data.gender}</StyledText>
                </Box>
            <Divider/>
                 <Box display="flex" justifyContent="space-between">
                <StyledText>{data.university}</StyledText>
                <StyledText>{universityLocations[data.university]}</StyledText> 
                {/* ADD FEATURE WHERE I HAVE CITIES CORRESPONDING TO UNIVERSITY */}
                </Box>
                </Root>
            </MyStack>
            <MyStack>
                <BrightnessMediumIcon />
                <b>COMPATIBILITY SCORE:</b> 90% HIGH
            </MyStack>
            <MyStack>
                <AutoStoriesIcon />
                <b>MAJOR</b>: {data.major}
               
            </MyStack>
            <BigFive setting={data.displayQuizResults} userEntity={data.username}/>
            <Lyrics content={data.about} />
        </CenteredBox>
        </FadeInWrapper>
    );
  };
  
  export default MyProfileTemplate;