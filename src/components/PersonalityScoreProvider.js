import React, { createContext, useState, useContext } from 'react';

const PersonalityContext = createContext();

export function PersonalityScoreProvider({ children }) {
  const [personalityScore, setPersonalityScore] = useState({});  

  return (
    <PersonalityContext.Provider value={{ personalityScore, setPersonalityScore }}>
      {children}
    </PersonalityContext.Provider>
  );
}

export function usePersonality() {
  return useContext(PersonalityContext);
}


//had to rename file to js for it to work 