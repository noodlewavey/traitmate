
import { createContext, useContext, useState, useEffect } from 'react';

const ImageUploadContext = createContext();

export const ImageUploadProvider = ({ children }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);


  return (
    <ImageUploadContext.Provider value={{ isImageUploaded, setIsImageUploaded }}>
      {children}
    </ImageUploadContext.Provider>
  );
};

export const useImageUpload = () => {
  return useContext(ImageUploadContext);
};
