import { useState, useContext, createContext } from 'react';

const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
  const [memory, setMemory] = useState('');
  const updateMemory = (e) => setMemory(e.target.value);

  return (
    <MemoryContext.Provider
      value={{
        memory,
        setMemory,
        updateMemory,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export const useMemory = () => useContext(MemoryContext);
