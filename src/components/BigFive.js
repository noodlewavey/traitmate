import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Box } from '@mui/material';

export default function BigFive({setting}) {
  return (
    <div style={{overflow: 'auto', minWidth: '100%'}}>
      <Accordion
        sx={{
          backgroundColor: 'transparent', 
          boxShadow: 'none',
          border: '1px solid black', 
          borderRadius: '4px',
        }}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{paddingLeft:'0.3rem'}}
        >
        <PsychologyIcon />
          <Typography variant="body1" paddingLeft='0.3rem'>BIG FIVE RESULTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography 
            variant="body2" 
            sx={{
              overflowWrap: 'break-word', // ensures text wraps within the container
              whiteSpace: 'pre-wrap', // preserves spaces and line breaks, but wraps text
            }}>
              { setting===true&&
              <p>I want my big five to be shown</p>
              }
              { setting===false&&
              <p>I don't want my big five to be shown</p>}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

//pre html tag preserves spaces and line breaks 
//make margins all 1rem