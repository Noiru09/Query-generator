//context to check which db is sected
import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const setNewToken = (tok) => {
    setToken(tok);
  };

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
