import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from 'database';
import Loading from 'components/Loading';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export const useUser = () => useContext(AppContext);
