import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileTemplate from './ProfileTemplate';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import HeartIcon from './HeartIcon';
import TrashIcon from './TrashIcon';



function SimilarUsers() {



    const [usersWithCompatibility, setUsersWithCompatibility] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/auth/similar-users', { withCredentials: true })
            .then(response => {
                setUsersWithCompatibility(response.data);
            })
            .catch(error => {
                console.error("Error fetching similar users:", error);
            });
    }, []);

    const goToNextUser = () => {
        if (currentIndex < usersWithCompatibility.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    }

    const goToPrevUser = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    }

    return (
        <div>
             <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',     // added to stack items vertically
          justifyContent: 'center',    // center items vertically
          alignItems: 'stretch',        // center items horizontally
          height: '100vh',             // full viewport height
          //padding: '0 1rem',
          position: 'relative',        // relative positioning context for the buttons
        }}
      >
            {usersWithCompatibility.length > 0 && (
                <>
                    <ProfileTemplate data={usersWithCompatibility[currentIndex].user} compatibility={usersWithCompatibility[currentIndex].compatibilityScore} />
                </>
            )}
          <IconButton 
          aria-label="dislike" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '59%',                    // half the height of the viewport
            left: '13.5rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
          onClick={goToNextUser}
        >
          <TrashIcon height="115rem" width="115rem"/>
        </IconButton>
<IconButton 
          aria-label="like" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '60%',                    // half the height of the viewport
            right: '14rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
          onClick={goToNextUser}
        >
          <HeartIcon height="90rem" width="90rem"/>
        </IconButton>
            </Box>
        </div>
    );
}

export default SimilarUsers;
