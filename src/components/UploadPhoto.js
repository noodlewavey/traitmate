import React, { useState } from 'react';
import { Button, Container, Input, Typography } from '@mui/material';
import axios from 'axios';

const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual API endpoint
        const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', formData);

        console.log('File uploaded:', response.data);
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
