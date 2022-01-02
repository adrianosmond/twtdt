import {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
  FC,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import { ref, onValue, off, query, limitToFirst } from 'firebase/database';
import { format } from 'date-fns';
import { CalendarDay, padWithZero } from 'utils/date';
import { database } from 'lib/database';
import { useUser } from './UserContext';

export interface IHistory {
  entries: string[];
  dates: CalendarDay[];
}

interface IHistoryContext {
  history: IHistory;
  setHistory: Dispatch<SetStateAction<IHistory>>;
  historyMonth: string;
  updateHistoryMonth: (e: FormEvent<HTMLSelectElement>) => void;
  historyYear: string;
  updateHistoryYear: (e: FormEvent<HTMLSelectElement>) => void;
  historyYears: number[];
}

const HistoryContext = createContext<IHistoryContext | null>(null);

export const HistoryProvider: FC = ({ children }) => {
  const user = useUser();

  const [historyYear, setHistoryYear] = useState<string>(
    format(new Date(), 'yyyy'),
  );
  const [historyMonth, setHistoryMonth] = useState<string>(
    format(new Date(), 'MM'),
  );
  const [history, setHistory] = useState<IHistory>({
    entries: [],
    dates: [],
  });
  const [earliestYear, setEarliestYear] = useState<number>(
    new Date().getFullYear(),
  );
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
    const archiveRef = query(
      ref(database, `${user}/archive/`),
      limitToFirst(1),
    );

    onValue(archiveRef, (snapshot) => {
      const earliestEntry = snapshot.val();
      if (earliestEntry) {
        const earliestDate = Object.keys(earliestEntry)[0];
        const [year] = earliestDate.split('-');
        setEarliestYear(parseInt(year, 10));
      }
    });

    return () => off(archiveRef);
  }, [user]);

  const updateHistoryMonth = (e: FormEvent<HTMLSelectElement>) =>
    setHistoryMonth(padWithZero(e.currentTarget.value));

  const updateHistoryYear = (e: FormEvent<HTMLSelectElement>) =>
    setHistoryYear(e.currentTarget.value);

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

export const useHistory: () => IHistoryContext = () =>
  useContext(HistoryContext) as IHistoryContext;
