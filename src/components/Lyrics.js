import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { MusicNote } from '@mui/icons-material';

export default function Lyrics() {
  return (
    <div style={{overflow: 'auto'}}>
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
          <Typography variant="body1" paddingLeft='0.4rem'>MY SONG</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography 
            variant="body2" 
            sx={{
              overflowWrap: 'break-word', // ensures text wraps within the container
              whiteSpace: 'pre-wrap', // preserves spaces and line breaks, but wraps text
            }}
          >
            {`Someday we're gonna look back
On a night like tonight
The car I pulled up in
The necklace you're wearing
Won't even cross our minds
Someday we're gonna blink twice
Say it happens like that
How much money we saved up
For the time that we gave up
Well, it'll all just be math
I know I'm only human
Don't know how many sunsets I got left
And I don't wanna ruin
This moment by wondering what comes next
I just want to love you
Like it's all I'm living for
Hold you close, enjoy you more
And spend a little less time keeping score`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

//pre html tag preserves spaces and line breaks 
//make margins all 1rem