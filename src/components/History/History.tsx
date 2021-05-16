import { FC } from 'react';
import Calendar from 'components/Calendar';
import { IHistory } from 'contexts/HistoryContext';

const History: FC<IHistory> = ({ entries, dates }) => (
  <Calendar entries={entries} dates={dates} />
);

export default History;
