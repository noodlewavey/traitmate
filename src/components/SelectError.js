import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTheme } from '@emotion/react';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function SelectError() {
    return (
      <Stack sx={{ width: '100%'}} spacing={2}>
        <Alert severity="error" sx={{ backgroundColor: 'transparent' , justifyContent: 'center'}}>You didn't select an answer! Please try again</Alert>
        </Stack>
    );
}