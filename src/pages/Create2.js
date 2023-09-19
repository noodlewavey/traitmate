import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.js';
import CreateNavbar from '../components/CreateNavbar.js';
import LeftBox from '../components/LeftBox.js'
// import '../styles.css';
// import '../index.css';
import { Typography } from "@mui/material"; 
// this typography import was necessary to use the font?
//ask chatgpt
//apparently its not important?
import InputField from '../components/InputFIeld.js';
import {motion} from 'framer-motion';
import Dropdown from '../components/Dropdown.js';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate, useNavigate}  from 'react-router-dom';
import SelectError from '../components/SelectError.js';
import Singleselect from '../components/Singleselect.js';
import AnimatedTextWord from '../components/AnimatedTextWord.js';
import TypewriterComponent from 'typewriter-effect';


const FullPageCenter = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Set the minimum height to 100% of the viewport height]
});

//this is to center the content

const ItalicText = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '8rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
  // other styles for your component
  lineHeight: '0.9',
}));


const Wrapper = styled('div')({
    justifyContent: 'center',
    alignItems: 'center',
    height: '45rem',
    width: '80rem',
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
    overflowX: 'scroll',
    overflowY: 'scroll',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  


// you can add styling on top of navbar to position it!

const validages = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

const unilist = [
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "McMaster University",
  "University of Montreal",
  "Concordia University",
  "Ryerson University",
  "Waterloo Univeristy"
]


const majors = [
    "Accounting",
    "Aerospace Engineering",
    "Anthropology",
    "Architecture",
    "Art History",
    "Astronomy",
    "Biochemistry",
    "Biology",
    "Biomedical Engineering",
    "Business",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Engineering",
    "Computer Science",
    "Crimonology",
    "East Asian Studies",
    "Economics",
    "Electrical Engineering",
    "Education",
    "English",
    "Environmental Science",
    "Film Studies",
    "Finance",
    "Food Science",
    "Gender Studies",
    "Geography", 
    "History",
    "Industrial Engineering",
    "Journalism",
    "Law",
    "Linguistics",
    "Marketing",
    "Materials Science and Engineering",
    "Mathematics",
    "Mechanical Engineering",
    "Mining Engineering",
    "Music",
    "Neuroscience",
    "Nursing",
    "Organizational Behaviour",
    "Pharmacology",
    "Philosophy",
    "Physics",
    "Political Science",
    "Psychology",
    "Religious Studies",
    "Sociology",
    "Statistics",
    "Urban Studies"
];

const genderslist = [
    "Male",
    "Female",
    "Male and Female",
    "Male and Female and Other"
];

const genders = [
    "Male",
    "Female",
    "Other"
]

const SubmitButton = styled.button({
  backgroundColor: 'transparent',   // Makes the button background transparent
  border: 'none',                   // Removes the default button border
  cursor: 'pointer',                // Changes the cursor to a hand when hovering over the button
  fontSize: '8rem',                 // Increases the font size
  marginBottom: '2rem',             // Shifts the button down by adding margin at the bottom
  '&:hover': {
    opacity: 0.4                    // Makes the button slightly transparent when hovered
  },
  '&:focus': {
    outline: 'none'                 // Removes the blue outline when the button is focused
  }
});

const slideVariants = {
  hidden: {
    y: '-100%',  // starting from a position above the initial position
    opacity: 0
  },
  visible: {
    y: '0%',    // end at the initial position
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}


export default function Create2({children}) {

  const [major, setMajor] = useState('');
  const [gender, setGender ] = useState('');
  const [attractedTo, setAttractedTo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [publicize, setPublicize] = useState('');

  const majorRef = useRef(null);
  const genderRef = useRef(null);
  const attractedToRef = useRef(null);
  

const handleSubmit = async (event) => {
  event.preventDefault();

  // Use the formRef to access the form
  const formData = new FormData(document.getElementById("submission"));

  // Extract the data from formData
  const updatedMajor = majorRef.current.querySelector('input').value;
  const updatedGender = genderRef.current.querySelector('input').value;
  const updatedAttractedTo = attractedToRef.current.querySelector('input').value;
  const updatedPhoneNumber = formData.get("phoneNumber");
  const updatedInstagram = formData.get("instagram");

  if (!updatedMajor || !updatedGender || !updatedAttractedTo || !updatedInstagram) {
    setError(true);
    return; // stop the function here
  }

  // Use the extracted data as needed
  console.log("Updated major:", updatedMajor);
  console.log("Updated gender:", updatedGender);
  console.log("Updated attractecto:", updatedAttractedTo );
  console.log("Updated phone number", updatedPhoneNumber);
  console.log("preference to display quiz results", publicize);
  console.log("instagram username", updatedInstagram);

  const payload = {
    major: updatedMajor,
    gender: updatedGender,
    attractedTo: updatedAttractedTo,
    phoneNumber: updatedPhoneNumber,
    displayQuiz: publicize,
    instagram: updatedInstagram,
  };

  console.log(payload); // Just for debugging

  try {
    const response = await axios.post('http://localhost:8080/auth/update2', payload, {
      withCredentials: true, // Set withCredentials to true
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status !== 200) {
      // Handle any response that's not a 2xx success status
      console.error('Failed to submit data:', response.data);
    } else {
      console.log('Successfully submitted data!');
      navigate('/quiz/1');
      // Handle successful submission (e.g., redirect to another page, show a success message, etc.)
    }
  } catch (error) {
    // Handle any errors that might occur during the Axios request
    console.error('There was a problem with the Axios request:', error.message);
  }
};

const HeaderWrapper = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '8rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
// other styles for your component
  lineHeight: '0.9',
  marginLeft: '3rem', 
  wordWrap:"break-word", 
  overflowWrap: "break-word",
   marginBottom: '5rem',
   marginTop: '0.7rem'
}));

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <LeftBox>
      {/* <ItalicText style={{marginLeft: '3rem', wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>"Wow, tell me more..."</ItalicText>  */}
      <HeaderWrapper>
        <TypewriterComponent
      options={{
        delay: 50,
      }}
    onInit={(typewriter) => {
      typewriter.typeString('Wow, tell me more...')
        .callFunction(() => {
          console.log('String typed out!');
        })
        .pauseFor(2500)
        .callFunction(() => {
          console.log('All strings were deleted');
        })
        .start();
    }}
  /> 
        </HeaderWrapper> 
      </LeftBox>
        <RightBox>
        <form ref={formRef} onSubmit={handleSubmit} id="submission">
        <Singleselect
   value={publicize}
   setValue={setPublicize}
   option1="Yes"
   option2="No"
   label="Do you want your personality quiz results to public on your profile?"
/>
<input type="hidden" name="publicize" value={publicize} />
            <Dropdown label="MAJOR" menuitems={majors} ref={majorRef}/>
            {/* add dropdown menu! for age and major  */}
            <Dropdown label="YOUR GENDER" menuitems={genders} ref={genderRef} />
            <Dropdown label="ATTRACTED TO" menuitems={genderslist} ref={attractedToRef}/>
          
            <InputField name="phoneNumber" label="YOUR PHONE NUMBER (optional)" />
            <InputField name="instagram" label="YOUR INSTAGRAM USERNAME" />
            <Typography variant="body2" sx={{width:"300px"}}>Your instagram handle will be shown to those you've matched with!</Typography>
            <br></br>
            <SubmitButton type="submit">&#8594;</SubmitButton>
            {
              error &&
              <SelectError message="You didn't fill out all fields!"></SelectError>
            }
            </form>
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}