import { format } from 'date-fns';
import firebaseApp from './firebase';

const DATE_FORMAT = 'YYYY-MM-DD';

export const database = firebaseApp.database();

export const createMemory = (user, date, type, text) => {
  const dateStr = format(date, DATE_FORMAT);
  return database.ref(`${user}/${dateStr}`).push({ text, type });
};

export const updateMemory = (user, date, id, type, text) => {
  const dateStr = format(date, DATE_FORMAT);
  return database.ref(`${user}/${dateStr}/${id}`).update({ type, text });
};

export const deleteMemory = (user, date, id) =>
  database.ref(`${user}/${date}/${id}`).remove();
