import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileTemplate from './ProfileTemplate';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import HeartIcon from './HeartIcon';
import TrashIcon from './TrashIcon';
import { motion, useAnimation } from 'framer-motion';





function SimilarUsers() {


    const [usersWithCompatibility, setUsersWithCompatibility] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();


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
        controls.start({
            x: '100vw',
            opacity: 0,
            transition: { duration: 0.5 }
        }).then(() => {
            if (currentIndex < usersWithCompatibility.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
                controls.start({ x: 0, opacity: 1 });
            }
        });
    }

    const dislike = () => {
        controls.start({
            x: '-100vw',
            opacity: 0,
            transition: { duration: 0.5 }
        }).then(() => {
            if (currentIndex < usersWithCompatibility.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
                controls.start({ x: 0, opacity: 1 });
            }
        });
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
                    <motion.div initial={{ x: 0, opacity: 1 }} animate={controls}>
                        <ProfileTemplate
                            data={usersWithCompatibility[currentIndex].user}
                            compatibility={usersWithCompatibility[currentIndex].compatibilityScore}
                        />
                    </motion.div>
                )}
          <IconButton 
          aria-label="dislike" 
          sx={{ 
            position: 'absolute',          // absolute positioning
            top: '59%',                    // half the height of the viewport
            left: '13.5rem',                  // 1rem from the left edge
            transform: 'translateY(-50%)'  // vertical centering
          }}
          onClick={dislike}
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
