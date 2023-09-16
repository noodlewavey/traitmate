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
    axios.get('http://localhost:8080/auth/isloggedin', {}, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          // Profile updated successfully, user is logged in
          setIsLoggedIn(true);
          console.log("I logged in here, context is changing from authcontext.js")
        } else {
          // Handle other response statuses
          setIsLoggedIn(false);
          console.log("I logged out here, context is changing from authcontext.js ")
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400 && error.response.data === 'User not found') {
          // User is not logged in or not authorized
          setIsLoggedIn(false);
          console.log("I logged out here, context is changing from authcontext ");
        } else {
          // Handle other errors
          setIsLoggedIn(false);
          console.log("I logged out here, context is changing fron authcontext.js")
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
