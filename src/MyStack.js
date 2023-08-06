import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MUIStack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'black',
  boxShadow: 'none',
  border: '1px solid black',
  width: '100%',
}));

export default function MyStack({children}) {
  return (
    <Box sx={{ 
      width: "100%",
    }}>
      <MUIStack direction="row" spacing={2}>
        <Item>
          <Box sx={{display: 'flex', alignItems: 'center',gap: '0.4rem',}}
          //this alignItems center aligns the children items about the x axis
          >
            {children}
          </Box>
        </Item>
      </MUIStack>
    </Box>
  );
}

