import React, { createContext, useContext } from 'react';
import { logEvent } from '../utils/logger';

const LoggerContext = createContext();

const LoggerProvider = ({ children }) => {
  const log = async (event) => {
    await logEvent(event);
  };

  return (
    <LoggerContext.Provider value={{ log }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = () => useContext(LoggerContext);
export default LoggerProvider;