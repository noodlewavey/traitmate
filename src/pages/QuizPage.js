import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.jsx';
import CreateNavbar from '../components/CreateNavbar.js';
import LeftBox from '../components/LeftBox.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';

//we use usetheme hook when applying theme-specific styling on components
//styled takes theme as input if we access it from a styled component declaration

// import '../styles.css';
// import '../index.css';
import { Typography } from "@mui/material"; 
// this typography import was necessary to use the font?
//ask chatgpt
//apparently its not important?
import InputField from '../components/InputFIeld.js';

const FullPageCenter = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Set the minimum height to 100% of the viewport height
});

//this is to center the content

const ItalicText = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '7rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
  // other styles for your component
  lineHeight: '0.9',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2rem',
}));


const Wrapper = styled('div')({
    justifyContent: 'center',
    alignItems: 'center',
    height: '45rem',
    width: '80rem',
    overflowX: 'hidden',
    overflowY: 'scroll',
    marginBottom: '4rem',
    position: 'relative', // This is important for the absolute positioning of the child.
});
//this is to prevent resizing....


//does putting position of top level copmonent as relative make all the child components, including grandchildren components, relative to the top level component? 

//this is relative position only deals with direct children that are absolutely positioned

//wrapper is outermost container...centers stuff in scree horizontall yand vefitcally
//overflowing content will be clipped
//relative means child elements will be positioned relative to wrapper
const CenterContainer = styled(Box)(({ theme }) => ({
    width: '98%',
    display: 'flex', //this ensures marginLeft: auto on right box pushes to right
    minHeight: '98%',
    height: '98%',
    margin: 'auto',
    marginTop: '4rem',
    overflowX: 'hidden',
    border: '1px solid black',
    overflowY: 'hidden',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!



export default function QuizPage({children}) {
    const theme = useTheme();


  return (
    <FullPageCenter>
    <Wrapper>
    {/* <CreateNavbar /> */}
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <LeftBox>
        <div>
      <ItalicText style={{wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>"	
I am the life of the party."</ItalicText> 
<Button
                variant="text"
                style={{
                  position: "absolute",
                  top: '35rem',
                  left: '15rem',
                }}
              >
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color="#000000"
                >
                  ← PREVIOUS
                </Typography>
              </Button>
              </div>
      </LeftBox>
        <RightBox>
        <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
            <FormControlLabel value="1" control={<Radio />} label={<Typography color={theme.palette.accent.main}>Very Inaccurate</Typography>} />
            <FormControlLabel value="2" control={<Radio />} label={<Typography color={theme.palette.accent.accent1}>Moderately Inaccurate</Typography>} />
            <FormControlLabel value="3" control={<Radio />} label={<Typography color={theme.palette.accent.accent2}>Neither Accurate/Inaccurate</Typography>} />
            <FormControlLabel value="4" control={<Radio />} label={<Typography color={theme.palette.accent.accent3}>Moderately Accurate</Typography>} />
            <FormControlLabel value="5" control={<Radio />} label={<Typography color={theme.palette.accent.accent4}>Very Accurate</Typography>} />
            </RadioGroup>
        </FormControl>
        <Button
                variant="text"
                style={{
                position: "absolute",
                  top: '35rem',
                  left: '17rem',
                }}
              >
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color="#000000"
                >
                  NEXT →
                </Typography>
              </Button>
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
  );
}
