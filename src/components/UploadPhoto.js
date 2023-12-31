import React, { useState } from 'react';
import { Button, Container, Input, Typography } from '@mui/material';
import axios from 'axios';
import styled from '@emotion/styled';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import SelectError from './SelectError';

const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
 const {isProfileCreated, setIsProfileCreated } = useAuth();
  const [success, setSuccess] = useState(false);
  const [invalid, setInvalid ] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //form data is js object used to construct data to be sent in http requests
  //commonly used for sending data in POST requests 
  //creates sets of key-value pairs that corresponds to fields and values
  //that you want to send

  //see if this is good for setting fields in back end
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      //this is key = file, value is the selected file 

      try {
        // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual API endpoint
        const response = await axios.post('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/update3', formData, {withCredentials: true});
        console.log('Photo uploaded:', response.data);
        setSuccess(true);
        setIsProfileCreated(true);
        setInvalid(false);
        
      } catch (error) {
        console.error('Error uploading file:', error);
        setInvalid(true);
      }
    }
  };


  const navigate = useNavigate(); // instantiate the navigate function

  const handleSubmit = () => {
    navigate('/myprofile'); // change '/quiz' to the desired route
  };


  const SubmitButton = styled.button({
    backgroundColor: 'transparent',   // Makes the button background transparent
    border: 'none',                   // Removes the default button border
    cursor: 'pointer',                // Changes the cursor to a hand when hovering over the button
    fontSize: '2rem',                 // Increases the font size
    marginBottom: '2rem',             // Shifts the button down by adding margin at the bottom
    '&:hover': {
      opacity: 0.4                    // Makes the button slightly transparent when hovered
    },
    '&:focus': {
      outline: 'none'                 // Removes the blue outline when the button is focused
    }
  });
  

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Upload Profile Photo
      </Typography>
      <Input
        type="file"
        inputProps={{ accept: 'image/*' }}
        onChange={handleFileChange}
        fullWidth
      />
      <Button variant="outlined" color="primary" onClick={handleUpload}>
        Upload
      </Button>
      <Typography variant="body2" sx={{width:"300px"}}>Choose a photo that is well-lit and shows your face clearly. The photo will be cropped automatically in a circular frame and displayed above your profile. This only accepts JPEG and PNG files without metadata. </Typography>
      {success &&
      <div>
      <p sx={{fontSize: '5rem'}}>Uploaded!</p>
      <SubmitButton onClick={handleSubmit}>&#8594;</SubmitButton>
      </div>
      }
      { invalid &&
      <SelectError message="Wrong file type or meta data found. Try another photo!" />
      }
    </Container>
  );
};

export default UploadPhoto;
