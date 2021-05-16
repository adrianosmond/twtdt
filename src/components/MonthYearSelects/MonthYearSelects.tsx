import { FC, FormEvent } from 'react';
import Select from 'components/Select';
import { MONTHS_IN_YEAR } from 'utils/date';

interface MonthYearSelectsProps {
  month: number;
  year: number;
  years: number[];
  updateMonth: (e: FormEvent<HTMLSelectElement>) => void;
  updateYear: (e: FormEvent<HTMLSelectElement>) => void;
}

const MonthYearSelects: FC<MonthYearSelectsProps> = ({
  month,
  updateMonth,
  year,
  updateYear,
  years,
}) => (
  <div className="mb-8 flex justify-center gap-2">
    <Select
      options={MONTHS_IN_YEAR.filter(Boolean).map((m, i) => ({
        name: `${m}`,
        value: i + 1,
      }))}
      value={month}
      onChange={updateMonth}
    />
    <Select
      options={years.map((y) => ({ name: `${y}`, value: y }))}
      value={year}
      onChange={updateYear}
    />
  </div>
);
export default MonthYearSelects;
