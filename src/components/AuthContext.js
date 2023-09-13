// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can use useEffect to check the user's session 
  useEffect(() => {
    // Send a request to the /update1 
    //In summary, sending an empty request body with an empty Create1Dto object to
    // your /update1 endpoint should not cause any changes to the existing data in the user's profile.
    axios.post('http://localhost:8080/auth/update1', {}, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          // Profile updated successfully, user is logged in
          setIsLoggedIn(true);
        } else {
          // Handle other response statuses
          setIsLoggedIn(false);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400 && error.response.data === 'User not found') {
          // User is not logged in or not authorized
          setIsLoggedIn(false);
        } else {
          // Handle other errors
          setIsLoggedIn(false);
        }
      });
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
