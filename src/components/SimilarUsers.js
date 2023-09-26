import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileTemplate from './ProfileTemplate';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import HeartIcon from './HeartIcon';
import TrashIcon from './TrashIcon';
import { motion, useAnimation } from 'framer-motion';
import MatchMessage from './MatchMessage';




function SimilarUsers() {


    const [usersWithCompatibility, setUsersWithCompatibility] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();

    const [showMatch, setShowMatch] = useState(false);


    useEffect(() => {
        axios.get('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/similar-users', { withCredentials: true })
            .then(response => {
                setUsersWithCompatibility(response.data);
            })
            .catch(error => {
                console.error("Error fetching similar users:", error);
            });
    }, []);



    const goToNextUser = () => {

        const targetUsername = usersWithCompatibility[currentIndex].user.username;

        axios.post('https://powerful-beach-48698-6df70ccb3bb4.herokuapp.com/auth/like-user', { targetUsername: targetUsername }, { withCredentials: true })
        .then(response => {
            console.log(response.data);
            console.log(targetUsername);
        
            if (response.data === "It's a match!") {
                setShowMatch(true);
                setTimeout(() => {
                    setShowMatch(false);
                    goToNextUserLogic();
                }, 5000);  // Wait for 15 seconds
            } else {
                goToNextUserLogic();
            }
        })
        .catch(error => {
            console.error("Error liking user:", error);
        });

}

const goToNextUserLogic = () => {
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
                    {showMatch ? 
                        <MatchMessage />:
                        <ProfileTemplate
                            data={usersWithCompatibility[currentIndex].user}
                            compatibility={usersWithCompatibility[currentIndex].compatibilityScore}
                        />
                    }
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
