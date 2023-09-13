import { createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { useImageUpload } from './ImageUploadContext.js';
import { useAuth } from './AuthContext';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const { isLoggedIn } = useAuth();
  const {isImageUploaded, setIsImageUploaded} = useImageUpload();

  useEffect(() => {
    // Send a request to the /update1 
    //In summary, sending an empty request body with an empty Create1Dto object to
    // your /update1 endpoint should not cause any changes to the existing data in the user's profile.
    axios.post('http://localhost:8080/auth/iscreated', {}, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          // Profile updated successfully, user is logged in
          setIsProfileCreated(true);
        } else {
          // Handle other response statuses
          setIsProfileCreated(false);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400 && error.response.data === 'User not found') {
          // User is not logged in or not authorized
          setIsProfileCreated(false);
        } else {
          // Handle other errors
          setIsProfileCreated(false);
        }
      });
  }, [isLoggedIn, isProfileCreated, isImageUploaded]);

  return (
    <ProfileContext.Provider value={{ isProfileCreated, setIsProfileCreated }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
