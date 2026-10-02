import React, { createContext, useContext, useState, useEffect } from 'react';
import { vibeData } from '../data/vibeData';

const VibeContext = createContext();

export { vibeData as vibeContent };

export function VibeProvider({ children }) {
  const [vibe, setVibeState] = useState(() => {
    return localStorage.getItem('awara_vibe_mode') || 'casual';
  });

  const setVibe = (newVibe) => {
    setVibeState(newVibe);
    localStorage.setItem('awara_vibe_mode', newVibe);
  };

  const isProfessional = vibe === 'professional';
  const content = vibeData[vibe] || vibeData.casual;

  return (
    <VibeContext.Provider value={{ vibe, setVibe, isProfessional, content }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const context = useContext(VibeContext);
  if (!context) {
    throw new Error('useVibe must be used within a VibeProvider');
  }
  return context;
}
