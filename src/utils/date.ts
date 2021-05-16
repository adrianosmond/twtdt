import { format } from 'date-fns';

export type CalendarDay = {
  day: number;
  dayStr: string;
  month: number;
  monthStr: string;
  yearStr: string;
  inMonth: boolean;
};

const DATE_FORMAT = 'yyyy-MM-dd';

const READABLE_DATE_FORMAT = 'MMMM Do, yyyy';

export const MONTHS_IN_YEAR = [
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

export const formatDateString = (date: Date): string =>
  format(date, DATE_FORMAT);

export const humanFriendlyDateString = (date: Date): string =>
  format(date, READABLE_DATE_FORMAT);

export const isValidDate = (date: Date): boolean =>
  date instanceof Date && !Number.isNaN(date);

const getNumDaysInMonth = (month: number, year: number) => {
  if (year % 4 === 0 && month === 2) {
    return 29;
  }
  return [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

export const padWithZero: (number: number | string) => string = (number) =>
  number.toString().padStart(2, '0');

export const createCalendarDays: (
  yearStr: string,
  monthStr: string,
) => CalendarDay[] = (yearStr, monthStr) => {
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
        dayStr: padWithZero(i),
        month: prevMonth,
        monthStr: padWithZero(prevMonth),
        yearStr,
        inMonth: false,
      });
    }
  }

  for (i = 1; i <= getNumDaysInMonth(month, year); i += 1) {
    days.push({
      day: i,
      dayStr: padWithZero(i),
      month,
      monthStr: padWithZero(month),
      yearStr,
      inMonth: true,
    });
  }

  for (i = 1; days.length % 7 !== 0; i += 1) {
    days.push({
      day: i,
      dayStr: padWithZero(i),
      month: month + 1,
      monthStr: padWithZero(month + 1),
      yearStr,
      inMonth: false,
    });
  }

  return days;
};
