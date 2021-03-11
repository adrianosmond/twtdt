import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from 'react';
import { format } from 'date-fns';
import { auth } from 'lib/auth';
import { padWithZero } from 'utils/date';
import Loading from 'components/Loading';
import { database } from 'lib/database';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [historyYear, setHistoryYear] = useState(format(new Date(), 'yyyy'));
  const [historyMonth, setHistoryMonth] = useState(format(new Date(), 'MM'));
  const [history, setHistory] = useState({
    entries: [],
    dates: [],
  });
  const [content, setContent] = useState('');
  const [earliestYear, setEarliestYear] = useState(new Date().getFullYear());
  const historyYears = useMemo(
    () => [
      earliestYear,
      ...new Array(new Date().getFullYear() - earliestYear)
        .fill(0)
        .map((_, i) => earliestYear + i + 1),
    ],
    [earliestYear],
  );

  useEffect(() => {
    const ref = database.ref(`${user}/archive/`).limitToFirst(1);

    ref.on('value', (snapshot) => {
      const earliestEntry = snapshot.val();
      if (earliestEntry) {
        const earliestDate = Object.keys(earliestEntry)[0];
        const [year] = earliestDate.split('-');
        setEarliestYear(parseInt(year, 10));
      }
    });

    return () => ref.off('value');
  }, [user]);

  const updateHistoryMonth = (e) =>
    setHistoryMonth(padWithZero(e.target.value));
  const updateHistoryYear = (e) => setHistoryYear(e.target.value);
  const updateContent = (e) => setContent(e.target.value);

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
        content,
        setContent,
        updateContent,
        history,
        setHistory,
        historyMonth,
        updateHistoryMonth,
        historyYear,
        updateHistoryYear,
        historyYears,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
