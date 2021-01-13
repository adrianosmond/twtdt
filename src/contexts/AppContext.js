import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from 'lib/auth';
import { formatDateString } from 'utils/date';
import Loading from 'components/Loading';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(formatDateString(new Date()));
  const [history, setHistory] = useState({
    loaded: false,
    memories: [],
  });
  const [content, setContent] = useState('');

  const updateContent = (e) => setContent(e.target.value);
  const updateDate = (e) => {
    const { value } = e.target;
    const newDate = new Date(value);
    const today = new Date();

    if (value === '' || newDate > today) {
      e.preventDefault();
    } else {
      setDate(value);
    }
  };

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

  return (
    <AppContext.Provider
      value={{
        user,
        date,
        updateDate,
        content,
        setContent,
        updateContent,
        history,
        setHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
