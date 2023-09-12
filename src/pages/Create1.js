import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from '../components/RightBox.jsx';
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
import { useState } from 'react';

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




export default function Create1({children}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [university, setUniversity] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (newValue) => setAge(newValue); // Adjust based on Dropdown component
  const handleUniversityChange = (newValue) => setUniversity(newValue); // Adjust based on Dropdown 

  const handleSubmit = async () => {
    const payload = {
      firstName,
      lastName,
      age,
      university
    };
  
    console.log(payload); // Just for debugging
  
    try {
      const response = await fetch('http://localhost:8080/auth/update1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        // Handle any response that's not a 2xx success status
        const responseData = await response.json();
        console.error('Failed to submit data:', responseData);
      } else {
        console.log('Successfully submitted data!');
        // Handle successful submission (e.g., redirect to another page, show a success message, etc.)
      }
    } catch (error) {
      // Handle any errors that might occur during the fetch
      console.error('There was a problem with the fetch operation:', error.message);
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
      <ItalicText style={{marginLeft: '3rem', wordWrap:"break-word", overflowWrap: "break-word", marginBottom: '5rem',marginTop: '0.7rem'}}>"Introduce yourself!"</ItalicText> 
      </LeftBox>
        <RightBox>
            <InputField label="FIRST NAME" value={firstName} onChange={handleFirstNameChange}/>
            <InputField label="LAST NAME" value={lastName} onChange={handleLastNameChange}/>
            <Dropdown label="AGE" menuitems={validages} value={age} onChange={handleAgeChange}/>
            {/* add dropdown menu! for age and major  */}
            <Dropdown label="UNIVERSITY" menuitems={unilist} value={university} onChange={handleUniversityChange} />
            <button onClick={handleSubmit}>Submit</button> {/* Add this Submit button */}
        </RightBox>
    </CenterContainer>
    </Wrapper>
    </FullPageCenter>
    </motion.div>
  );
}