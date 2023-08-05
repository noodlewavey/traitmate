import React from 'react';
import { Box } from '@mui/material';

const CenteredBox = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '85vh',
          borderRadius: '16px',
          backgroundColor: 'white',
          padding: '16px',
          color: 'black',
          border: '1px solid black',
          marginTop: '20%',
          marginBottom: '5%',
        }}
      >
      {children}
      </Box>
    </Box>
  );
};

export default CenteredBox;

//we have outer box...this is like a flexbox container...centering child elements horizontally and vertically
//min height maeans iot takes at least full height of viewport
//inner box eelment is actual content box...what you want to define its appearance as 
