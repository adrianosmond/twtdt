import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from 'lib/auth';
import Loading from 'components/Loading';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(
    () =>
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser.uid);
        } else {
          setUser(false);
        }
      }),
    [],
  );

  if (user === null) {
    return <Loading />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
