import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BorderBottomSharp } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

export default function LogButton({onClick, label, color, width, isActive}) {

const theme = useTheme();

  const activeColor = isActive ? 'blue' : 'black';  
  return (
      <Button variant="outlined" onClick={onClick} style={{color:activeColor,  borderColor:activeColor, width: width}}>{label}</Button>
  );
}