import React from 'react';
import { Box } from '@mui/material';

const CenteredBox = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative', 
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '50%',
          position: 'relative',//makes child elements, the children relative
          height: '85vh',
          borderRadius: '16px',
          padding: '16px',
          color: 'black',
          border: '1px solid black',
          marginTop: '20%',
          marginBottom: '5%',
          overflow: 'auto',
          '&::-webkit-scrollbar-track': { // styles the track (background) of the scrollbar
            backgroundColor: 'transparent', // makes the background transparent
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',  // <--- Added
            gap: '1rem',
            width: '100%',  // <--- Added
          }}
          //we wrap the children inside this box to order
          //CSS properties arent inherited down DOM tree....
          //properties like color and font are inherited, but flexbox properties are not...
        >
      {children}
      </Box>
    </Box>
    </Box>
  );
};

export default CenteredBox;

//we have outer box...this is like a flexbox container...centering child elements horizontally and vertically
//min height maeans iot takes at least full height of viewport
//inner box eelment is actual content box...what you want to define its appearance as 
