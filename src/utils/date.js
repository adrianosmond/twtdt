import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

const READABLE_DATE_FORMAT = 'MMMM Do, yyyy';

export const formatDateString = (date) => format(date, DATE_FORMAT);

export const humanFriendlyDateString = (date) =>
  format(date, READABLE_DATE_FORMAT);

export const isValidDate = (date) =>
  date instanceof Date && !Number.isNaN(date);
