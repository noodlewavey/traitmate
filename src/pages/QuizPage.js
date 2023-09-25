import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.js';
import CreateNavbar from '../components/CreateNavbar.js';
import LeftBox from '../components/LeftBox.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import {useParams, useNavigate} from 'react-router-dom';
import { useQuiz} from '../components/QuizContext.js';
import { useState, useEffect } from 'react';
import SelectError from '../components/SelectError.js';
import {motion} from 'framer-motion';
import { PersonalityScoreProvider, usePersonality } from '../components/PersonalityScoreProvider.js';
//we use usetheme hook when applying theme-specific styling on components
//styled takes theme as input if we access it from a styled component declaration
import AnimatedTextWord from '../components/AnimatedTextWord.js';
import CloseButton from '../components/CloseButton.js';


import { Typography } from "@mui/material"; 

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
  fontSize: '5rem',
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
    overflowY: 'hidden',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!

const slideVariants = {
  hidden: {
    y: '-100%',  // starting from a position above the initial position
    opacity: 0
  },
  visible: {
    y: '0%',    // end at the initial position
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
}

export default function QuizPage({children, questions}) {
    const theme = useTheme();
    const navigate = useNavigate();

    // useParams: when component is rendered, useParams hook will provide object containing values of dynamic parameters

    //this extracts everything after quiz...i think
    //confirm 
    const {questionId} = useParams();

    const questionIndex = parseInt(questionId)-1;

    console.log(questionId);

    const [selectedValue, setSelectedValue] = React.useState(null);

    const currentQuestion = questions[questionIndex];
    //changing this to questions[0] works....
    //mnevermind...variable named improperly....

    const [error, setError] = useState(null)

    const {answers, setAnswers} = useQuiz();
    //seems to be import statement causing the problem...

    const {personalityScore,  setPersonalityScore} = usePersonality();

    const handleNextClick = async() => {

        if (selectedValue === null){
            console.log(selectedValue);
            setError(true);
            return;
        }//return is to exit function early if null...

        else{
            setError(false);
        }

        setAnswers(prevAnswers => ({
          ...prevAnswers,
          [questionId]: parseInt(selectedValue, 10)
        }));
      //this code is not what is causing setAnswers to be undefined...

        if (questionId==="50"){
            await submitAnswers(answers);
            navigate(`/resultsquiz`);
            return;
            
        }
    

        //nevermind...the issue is that user is null, id is in it...


        //prevAnswers are spread into new object....
        //new answer is added using questionId keywith value selectedValue
        console.log(answers, "after next");
        //this console log doesnt log the value just added...

        const nextQuestionID = (questionIndex+2) //going to the next question's route...
        //we do +2 since questionIndex is id minus 1...indexing by zero
        navigate(`/quiz/${nextQuestionID}`);
        //REMOVED TO STRING FOR NEXTQUESTIONID....
        //TO STRING WAS NEEDED FOR useHistory, but not for 
        //i UPDATE the global state from here since next button triggers form submission...
        //remember to throw an error if selectedValue is null...

        
    }

    useEffect(() => {
        console.log(answers, "after update");
    }, [answers]);

    const handlePrevClick = () => {
        // Create a new copy of the answers object
        const updatedAnswers = { ...answers };
        // Delete the answer 
        delete updatedAnswers[questionId];
        // update the answers state
        setAnswers(updatedAnswers);
        console.log(answers, "after prev");
        const prevQuestionID = (questionIndex)
        navigate(`/quiz/${prevQuestionID}`);
    }

    //we useh history.push with history.goback()
    //using history.goback() wit history.goforward() might lead to unexpected behaviours...

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        setError(false); //this is necessary to give it a value once selected...
        //two setErrors are not redundant... 
    }


    const submitAnswers = async () => {
      console.log(answers);
      try {
          const response = await fetch('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/submit-answers', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(answers),
              credentials: 'include'
          });

          const data = await response.json();

          // Now you can use the response data (5 scores, as you mentioned)
          console.log(data);
          await setPersonalityScore(data);//adding this....

        return Promise.resolve();
      } catch (error) {
          console.error('Error submitting answers:', error);
          // Reject the promise in case of an error
        return Promise.reject(error);
      }
  }


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    {/* <CreateNavbar /> */}
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <CloseButton />
      <LeftBox>
        <div>
        {currentQuestion.text && (
                <ItalicText style={{ wordWrap: "break-word", overflowWrap: "break-word", marginBottom: '5rem', marginTop: '0.7rem' }}>
                  "{currentQuestion.text}"
                </ItalicText>
              )}
              {questionIndex > 0 && (
<Button
                variant="text"
                style={{
                  position: "absolute",
                  top: '35rem',
                  left: '15rem',
                }}
                onClick={handlePrevClick} //call handle prevclick function on button
              >
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color="#000000"
                >
                  ← PREVIOUS
                </Typography>
              </Button>
              )}
              </div>
      </LeftBox>
        <RightBox justify="yes">
        <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={handleRadioChange}
                    value={selectedValue} //value is set after handleRadioCHange is called...
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
                onClick={handleNextClick}
              >
                <Typography
                  variant="body2"
                  fontSize="1rem"
                  color="#000000"
                >
                  NEXT →
                </Typography>
              </Button>
              {error && (
                    <SelectError message="You didn't select an answer! Please try again" />
                )}
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}


//error...the error message is not popping up ...how to fix?