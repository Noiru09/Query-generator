//context to check which db is sected
import React, { createContext, useContext, useState } from 'react';

const DbContext = createContext();

export const DbProvider = ({ children }) => {
  //setting the default state as mongodb
  const [selectedDb, setSelectedDb] = useState('MongoDB');

  const setDb = (db) => {
    setSelectedDb(db);
  };

  return (
    <DbContext.Provider value={{ selectedDb, setDb }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => {
  return useContext(DbContext);
};
