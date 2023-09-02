import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '2px',
  width: '300px',
  fontFamily: theme.typography.body1.fontFamily,
  marginRight: '-5px',
  '& .MuiInputBase-input': {
    fontFamily: theme.typography.body1.fontFamily,
    height: '6px',
  },
}));

const Dropdown = ({ label, menuitems }) => {
  return (
    <div>
<Typography variant="body1" sx={{margin:0, fontSize:'0.85rem'}}> {label}</Typography>  
        <CustomTextField
          id="select-something"
          select
          label="Select"
          defaultValue=""
          helperText="Select your language"
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              },
              getContentAnchorEl: null,
            },
          }}
        >
          {menuitems.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </CustomTextField>
    </div>
  );
};

export default Dropdown;