import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

export const formatDateString = (date) => format(date, DATE_FORMAT);

export const isValidDate = (date) =>
  date instanceof Date && !Number.isNaN(date);
