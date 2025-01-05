import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Box } from '@mui/material';
import BarChart from './BarResult';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function BigFive({setting, userEntity}) {


  const [personalityScore, setPersonalityScore] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      const dataToSend = {
        targetUsername: userEntity // or whatever value you want to send
      };

      axios.post('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/search-user', dataToSend, {
        withCredentials: true
      })
      .then(response => {
        if (response.data && response.data.score) {
          setPersonalityScore(response.data.score);
          console.log("my score object", response.data.score)
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    };

    fetchData();
  }, []);
  
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
              { setting===true&& personalityScore&&
            <BarChart width="200px" height="200px" personality={personalityScore} />
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