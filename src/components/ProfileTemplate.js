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


const ProfileTemplate = () => {

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
          marginTop: theme.spacing(1.2),
        },
      }));

      const StyledText = styled(Typography)(({ theme }) => ({
        ...theme.typography.body2,
        fontSize: '0.9em',
      }));

    return (
        <CenteredBox>
            <Typography variant = "h2" style={{maxWidth: "80%", wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>Jasmine Wang</Typography>
            <CircularFrame imageUrl="https://st3.depositphotos.com/1017228/18861/i/450/depositphotos_188618952-stock-photo-portrait-of-asian-lovely-woman.jpg"/>
            <MyStack>
                <Root>
                <Box display="flex" justifyContent="space-between">
                <StyledText>AGE: 21</StyledText>
                <StyledText>GENDER: FEMALE</StyledText>
                </Box>
            <Divider/>
                 <Box display="flex" justifyContent="space-between">
                <StyledText>MCGILL UNIVERSITY</StyledText>
                <StyledText>MONTREAL, QC</StyledText>
                </Box>
                </Root>
            </MyStack>
            <MyStack>
                <BrightnessMediumIcon />
                <b>OPPOSITENESS SCORE:</b> 90% HIGH
            </MyStack>
            <MyStack>
                <AutoStoriesIcon />
                <b>MAJOR</b>: Computer Science
            </MyStack>
            <BigFive />
            <Lyrics />

        </CenteredBox>
    );
  };
  
  export default ProfileTemplate;