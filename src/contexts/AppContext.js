import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from 'lib/auth';
import Loading from 'components/Loading';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    return auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser.uid);
      } else {
        setUser(false);
      }
    });
  }, []);

  if (user === null) {
    return <Loading />;
  }

  return (
    <AppContext.Provider value={{ user, date, setDate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
