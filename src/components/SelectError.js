import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTheme } from '@emotion/react';

export default function SelectError() {
    return (
      <Stack sx={{ width: '80%' }} spacing={2}>
        <Alert severity="error">You didn't select an answer! Please try again</Alert>
        </Stack>
    );
}