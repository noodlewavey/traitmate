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

      //we have outer box...this is like a flexbox container...centering child elements horizontally and vertically
//min height maeans iot takes at least full height of viewport
//inner box eelment is actual content box...what you want to define its appearance as 

    >
      <Box
        sx={{
          width: '30rem',
          minWidth: '30rem',
          maxWidth: '30rem',
          position: 'relative',//makes child elements, the children relative
          //height: '85vh',
          height: 'auto',
          borderRadius: '16px',
          padding: '16px',
          color: 'black',
          border: '1px solid black',
          marginTop: '7rem',
          marginBottom: '3rem',
          '&::-webkit-scrollbar-track': { // styles the track (background) of the scrollbar
            backgroundColor: 'transparent', // makes the background transparent
          },
        }}
        //outerbox is full-screen container with min height..purpose to center child box hroizontally and vertically
//middle box is main content conainer....handles scrollbar, wwidth, height....given margins, paddig, color, border
//innerbox is layout container for children..styles children 

//The outermost box is for vertical and horizontal centering.
///The middle box is the main styled content container with fixed dimensions.
//The innermost box manages the layout of the content (children) within the main container.
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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




