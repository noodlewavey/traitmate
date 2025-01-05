import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { MusicNote } from '@mui/icons-material';

export default function Lyrics({content}) {
  return (
    <div style={{, minWidth: '100%'}}>
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
        <MusicNoteIcon />
          <Typography variant="body1" paddingLeft='0.4rem'>ABOUT ME</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography 
            variant="body2" 
            sx={{
              overflowWrap: 'break-word', // ensures text wraps within the container
              whiteSpace: 'pre-wrap', // preserves spaces and line breaks, but wraps text
            }}
          >
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

//pre html tag preserves spaces and line breaks 
//make margins all 1rem