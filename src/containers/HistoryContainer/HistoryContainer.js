import React, { useEffect, useState } from 'react';
import { useUser } from 'contexts/UserContext';
import { useHistory } from 'contexts/HistoryContext';
import Loading from 'components/Loading';
import History from 'components/History';
import { loadDatesWithEntries } from 'lib/database';
import { createCalendarDays } from 'utils/date';
import MonthYearSelects from 'components/MonthYearSelects';

const HistoryContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const user = useUser();
  const {
    historyMonth,
    updateHistoryMonth,
    historyYear,
    updateHistoryYear,
    historyYears,
    history,
    setHistory,
  } = useHistory();
  const { entries, dates } = history;

  useEffect(() => {
    setLoaded(false);
    loadDatesWithEntries(user, historyYear, historyMonth).then((e) => {
      setLoaded(true);
      setHistory({
        entries: e,
        dates: createCalendarDays(historyYear, historyMonth),
      });
    });
  }, [user, setHistory, historyYear, historyMonth]);

  return (
    <div>
      <MonthYearSelects
        month={historyMonth}
        updateMonth={updateHistoryMonth}
        year={historyYear}
        updateYear={updateHistoryYear}
        years={historyYears}
      />
      {!loaded ? <Loading /> : <History entries={entries} dates={dates} />}
    </div>
  );
};

export default HistoryContainer;
