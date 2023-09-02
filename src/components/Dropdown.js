import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

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

const Dropdown = ({label}) => {


  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '1rem' }}>Text on the left:</span>
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
      <MenuItem>Hello</MenuItem>
    </CustomTextField>
  </div>
  );
};

export default Dropdown;
