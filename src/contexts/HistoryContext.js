import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from 'react';
import { format } from 'date-fns';
import { padWithZero } from 'utils/date';
import { database } from 'lib/database';
import { useUser } from './UserContext';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const user = useUser();

  const [historyYear, setHistoryYear] = useState(format(new Date(), 'yyyy'));
  const [historyMonth, setHistoryMonth] = useState(format(new Date(), 'MM'));
  const [history, setHistory] = useState({
    entries: [],
    dates: [],
  });
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

  return (
    <HistoryContext.Provider
      value={{
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
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
