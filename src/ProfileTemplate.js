import CenteredBox from "./CenteredBox";
import { Typography } from "@mui/material";
import CircularFrame from "./CircularFrame";
import Lyrics from './Lyrics';
import MyStack from './MyStack';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BigFive from "./BigFive";

const ProfileTemplate = () => {
    return (
        <CenteredBox>
            <Typography variant = "h2" style={{maxWidth: "80%", wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem'}}>Jasmine Wang</Typography>
            <CircularFrame imageUrl="https://st3.depositphotos.com/1017228/18861/i/450/depositphotos_188618952-stock-photo-portrait-of-asian-lovely-woman.jpg"/>
            <MyStack>
                <BrightnessMediumIcon />
                OPPOSITENESS SCORE:
            </MyStack>
            <MyStack>
                <AutoStoriesIcon />
                MAJOR:
            </MyStack>
            <BigFive />
            <Lyrics />

        </CenteredBox>
    );
  };
  
  export default ProfileTemplate;