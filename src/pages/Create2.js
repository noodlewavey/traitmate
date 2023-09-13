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
export default function Create2({children}) {

  const [major, setMajor] = useState('');
  const [gender, setGender ] = useState('');
  const [attractedTo, setAttractedTo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const formRef = useRef(null);

  const handleMajorChange = (selectedMajor) => {
    setMajor(selectedMajor);
  }

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  }

  const handleAttractedTo = (selectedAttract) => {
    setAttractedTo(selectedAttract);
  }


const handleSubmit = async (event) => {
  event.preventDefault();

  // Use the formRef to access the form
  const formData = new FormData(document.getElementById("submission"));

  // Extract the data from formData
  const updatedMajor = formData.get("major");
  const updatedGender = formData.get("gender");
  const updatedAttractedTo = formData.get("attractedTo");
  const updatedPhoneNumber = formData.get("phoneNumber");

  // Use the extracted data as needed
  console.log("Updated major:", updatedMajor);
  console.log("Updated gender:", updatedGender);
  console.log("Updated attractecto:", updatedAttractedTo );
  console.log("Updated phone number", updatedPhoneNumber);

  const payload = {
    major: updatedMajor,
    gender: updatedGender,
    attractedTo: updatedAttractedTo,
    phoneNumber: updatedPhoneNumber,
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
      // Handle successful submission (e.g., redirect to another page, show a success message, etc.)
    }
  } catch (error) {
    // Handle any errors that might occur during the Axios request
    console.error('There was a problem with the Axios request:', error.message);
  }
};

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.4}}}>
    <FullPageCenter>
    <Wrapper>
    <CreateNavbar />
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <LeftBox>
      <ItalicText style={{marginLeft: '3rem', wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>"Wow, tell me more..."</ItalicText> 
      </LeftBox>
        <RightBox>
        <form ref={formRef} onSubmit={handleSubmit} id="submission">
            <Dropdown label="MAJOR" menuitems={majors} value={major} onChange={handleMajorChange} />
            <input type="hidden" name="major" value={major} />
            {/* add dropdown menu! for age and major  */}
            <Dropdown label="YOUR GENDER" menuitems={genders} value={gender} onChange={handleGenderChange} />
            <input type="hidden" name="gender" value={gender} />
            <Dropdown label="ATTRACTED TO" menuitems={genderslist} value={attractedTo} onChange={handleAttractedTo}/>
            <input type="hidden" name="attractedTo" value={attractedTo} />
            <InputField name="phoneNumber" label="YOUR PHONE NUMBER" />
            <Typography variant="body2" sx={{width:"300px"}}>Your phone number will be shown to those you've matched with!</Typography>
            <button type="submit" >Submit</button> 
            </form>
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}