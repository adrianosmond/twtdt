import Calendar from 'components/Calendar';
import { MONTHS_IN_YEAR } from 'utils/date';

const History = ({ year, month, entries, dates }) => (
  <div>
    <div className="mb-8 flex justify-center">
      {MONTHS_IN_YEAR[parseInt(month, 10)]} {year}
    </div>
    <Calendar entries={entries} dates={dates} />
  </div>
);

export default History;
