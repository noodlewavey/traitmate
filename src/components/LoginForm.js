import * as React from 'react';
import Stack from '@mui/material/Stack';
import InputField from './InputFIeld';
import LogButton from './LogButton';

export default function LoginForm({onClick}) {
  return (
    <div>
        <Stack spacing="1rem">
        <InputField label="USERNAME"  />
        <InputField label="PASSWORD" />
        <LogButton onClick={onClick} label="submit" color="#000000" style={{flex:1}}/> 
        </Stack>
    </div>
  );
}