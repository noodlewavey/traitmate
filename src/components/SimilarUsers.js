import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileTemplate from './ProfileTemplate';

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
            {usersWithCompatibility.length > 0 && (
                <>
                    <ProfileTemplate data={usersWithCompatibility[currentIndex].user} />
                    <div>
                        <button onClick={goToPrevUser}>Previous</button>
                        <button onClick={goToNextUser}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SimilarUsers;
