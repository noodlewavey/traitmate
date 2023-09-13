import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
//import this to use theme from parent
import { Typography } from '@mui/material';

const InputField2 = ({label, color, onChange, name, value}) => {

  const theme = useTheme();

  //above is a callback handler that calls the onchange passed down by parent
  //initialize theme
  return (
  //   <Box
  //   component="form"
  //   sx={{
  //     display: "flex",
  //     alignItems: "center", //this centers text to be on the same x axis as the textfield
  //     gap: "1rem", // This sets the spacing between flex items
  //     marginLeft: "5rem",
  //   }}
  //   noValidate
  //   autoComplete="off"
  // >
  <div>
<Typography variant="body1" sx={{margin:0, fontSize:'0.85rem', color: {color}}}> {label}</Typography>  
<TextField 
    id="outlined-basic" 
    variant="outlined" 
    name={name}
    value={value}
    onChange={onChange}  //call handler for input changes
    sx={{ 
      width: '300px',//added this, made the thing consistent 
      margin: 0,
        '& .MuiInputBase-input': {
            fontSize: '0.85rem', 
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: '300' 
            // using number for fontweight works...normal and light don't work!
        }
    }} 
/>
{/* setting margins of textfield and typography to 0 then adding gap to Box... */}
</div>
  );
}

export default InputField2;