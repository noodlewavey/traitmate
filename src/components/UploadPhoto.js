import React, { useState } from 'react';
import { Button, Container, Input, Typography } from '@mui/material';
import axios from 'axios';

const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
        const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', formData);

        console.log('Photo uploaded:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

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
    </Container>
  );
};

export default UploadPhoto;
