import React, { useEffect } from 'react';
import { useApp } from 'contexts/AppContext';
import Loading from 'components/Loading';
import History from 'components/History';
import { loadDatesWithEntries } from 'lib/database';
import { createCalendarDays } from 'utils/date';

const HistoryContainer = () => {
  const { user, historyMonth, historyYear, history, setHistory } = useApp();
  const { loaded, entries, dates } = history;

  useEffect(() => {
    if (!loaded) {
      loadDatesWithEntries(user, historyYear, historyMonth).then((e) => {
        setHistory({
          loaded: true,
          entries: e,
          dates: createCalendarDays(historyYear, historyMonth),
        });
      });
    }
  }, [user, loaded, setHistory, historyYear, historyMonth]);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <History
      entries={entries}
      dates={dates}
      year={historyYear}
      month={historyMonth}
    />
  );
};

export default HistoryContainer;
