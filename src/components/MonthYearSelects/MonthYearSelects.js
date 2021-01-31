const { default: Select } = require('components/Select');
const { MONTHS_IN_YEAR } = require('utils/date');

const MonthYearSelects = ({ month, updateMonth, year, updateYear, years }) => (
  <div className="mb-8 flex justify-center gap-2">
    <Select
      options={MONTHS_IN_YEAR.filter(Boolean).map((m, i) => ({
        name: m,
        value: i + 1,
      }))}
      value={parseInt(month, 10)}
      onChange={updateMonth}
    />
    <Select
      options={years.map((y) => ({ name: y, value: y }))}
      value={parseInt(year, 10)}
      onChange={updateYear}
    />
  </div>
);
export default MonthYearSelects;
