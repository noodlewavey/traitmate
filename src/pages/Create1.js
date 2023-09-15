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
import InputField2 from '../components/InputField2.js';
import {motion} from 'framer-motion';
import Dropdown from '../components/Dropdown.js';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate, useNavigate}  from 'react-router-dom';
import SelectError from '../components/SelectError.js';
import { ConnectingAirportsOutlined } from '@mui/icons-material';

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



export default function Create1() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState(0);
const [university, setUniversity] = useState('');
const formRef = useRef(null);
const navigate = useNavigate();
const [error, setError] = useState(false);


const handleAgeChange = (selectedAge) => {
  setAge(selectedAge);
};

const handleUniversityChange = (selectedUni) => {
  setUniversity(selectedUni);
};

const handleSubmit = async (event) => {
  console.log("handlesubmit triggered");
  event.preventDefault();

  // Use the formRef to access the form
  const formData = new FormData(document.getElementById("update1"));

  // Extract the data from formData
  const updatedFirstName = formData.get("firstName");
  const updatedLastName = formData.get("lastName");
  const updatedAge = formData.get("age");
  const updatedUniversity = formData.get("university");

  if (!updatedFirstName || !updatedLastName || !updatedAge || !updatedUniversity) {
    setError(true);
    return; // stop the function here
  }

  // Use the extracted data as needed
  console.log("Updated First Name:", updatedFirstName);
  console.log("Updated Last Name:", updatedLastName);
  console.log("Updated Age:", age);
  console.log("Updated University:", university);

  const payload = {
    firstName: updatedFirstName,
    lastName: updatedLastName,
    age: updatedAge,
    university: updatedUniversity,
  };

  console.log(payload); // Just for debugging

  try {
    const response = await axios.post('http://localhost:8080/auth/update1', payload, {
      withCredentials: true, // Set withCredentials to true
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      // Handle any response that's not a 2xx success status
      console.error('Failed to submit data:', response.data);
    } else {
      console.log('Successfully submitted data!');
      navigate('/create/2');
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
    {/* adding navbar above container so its rendered above containers... */}
    <CenterContainer>
      <LeftBox>
      <ItalicText style={{marginLeft: '3rem', wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>'Introduce yourself!'</ItalicText> 
      </LeftBox>
        <RightBox>
        <form ref={formRef} onSubmit={handleSubmit} id="update1">
        <Dropdown label="AGE" menuitems={validages} value={age} onChange={handleAgeChange}></Dropdown>
            <input type="hidden" name="age" value={age} />
            {/* add dropdown menu! for age and major  */}
            <Dropdown label="UNIVERSITY" menuitems={unilist} value={university} onChange={handleUniversityChange}></Dropdown>
            <input type="hidden" name="university" value={university} />
        <InputField2 name="firstName" label="FIRST NAME" />
        <input type="hidden" name="firstName" value={firstName} />
            <InputField2 name="lastName" label="LAST NAME" />
            <input type="hidden" name="lastName" value={lastName} />
            <SubmitButton type="submit">&#8594;</SubmitButton>
            {
              error && 
              <SelectError message="You didn't fill out all fields!"></SelectError>
            }
{/* Add this Submit button */}
            </form>
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}