import { useState, useEffect, useContext, createContext, FC } from 'react';
import { auth } from 'lib/auth';
import Loading from 'components/Loading';

const UserContext = createContext<string | null | boolean>('null');

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<string | null | boolean>(null);

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

export const useUser: () => string | boolean = () =>
  useContext(UserContext) as string | boolean;
