import React, { useEffect } from 'react';
import { useApp } from 'contexts/AppContext';
import Loading from 'components/Loading';
import History from 'components/History';
import { loadHistory } from 'lib/database';

const HistoryContainer = () => {
  const { user, history, setHistory } = useApp();
  const { loaded, memories } = history;
  useEffect(() => {
    if (!loaded) {
      loadHistory(user).then((loadedMemories) => {
        setHistory({
          loaded: true,
          memories: loadedMemories,
        });
      });
    }
  }, [user, loaded, setHistory]);
  if (!loaded) {
    return <Loading />;
  }
  return <History memories={memories} />;
};

export default HistoryContainer;
