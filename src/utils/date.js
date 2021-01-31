import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

const READABLE_DATE_FORMAT = 'MMMM Do, yyyy';

export const MONTHS_IN_YEAR = [
  undefined,
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDateString = (date) => format(date, DATE_FORMAT);

export const humanFriendlyDateString = (date) =>
  format(date, READABLE_DATE_FORMAT);

export const isValidDate = (date) =>
  date instanceof Date && !Number.isNaN(date);

const getNumDaysInMonth = (month, year) => {
  if (year % 4 === 0 && month === 2) {
    return 29;
  }
  return [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

export const padWithZero = (number) => number.toString().padStart(2, '0');

export const createCalendarDays = (yearStr, monthStr) => {
  let i;
  const days = [];
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10);
  const numDaysFromPrevMonth = new Date(`${year}-${month}-01`).getDay() - 1;

  if (numDaysFromPrevMonth > 0) {
    const prevMonth = month - 1 === 0 ? 12 : month - 1;
    const prevYear = prevMonth === 12 ? year - 1 : year;
    const numDaysInPrevMonth = getNumDaysInMonth(prevMonth, prevYear);

    for (
      i = numDaysInPrevMonth - numDaysFromPrevMonth;
      i < numDaysInPrevMonth;
      i += 1
    ) {
      days.push({
        day: i,
        month: prevMonth,
        inMonth: false,
      });
    }
  }

  for (i = 1; i <= getNumDaysInMonth(month, year); i += 1) {
    days.push({
      day: i,
      dayStr: padWithZero(i),
      month,
      monthStr,
      inMonth: true,
    });
  }

  for (i = 1; days.length % 7 !== 0; i += 1) {
    days.push({
      day: i,
      month: month + 1,
      inMonth: false,
    });
  }

  return days;
};
