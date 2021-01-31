import React, { useState, useEffect, useContext, createContext } from 'react';
import { format } from 'date-fns';
import { auth } from 'lib/auth';
import { formatDateString } from 'utils/date';
import Loading from 'components/Loading';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(formatDateString(new Date()));
  const [historyYear, setHistoryYear] = useState(format(new Date(), 'yyyy'));
  const [historyMonth, setHistoryMonth] = useState(format(new Date(), 'MM'));
  const [history, setHistory] = useState({
    loaded: false,
    entries: [],
    dates: [],
  });
  const [content, setContent] = useState('');

  const updateHistoryMonth = (e) => setHistoryMonth(e.target.value);
  const updateHistoryYear = (e) => setHistoryYear(e.target.value);
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
        historyMonth,
        updateHistoryMonth,
        historyYear,
        updateHistoryYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
