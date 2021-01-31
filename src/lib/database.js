import { format } from 'date-fns';
import firebaseApp from './firebase';

export const database = firebaseApp.database();

export const deleteMemory = (user, date) =>
  database.ref(`${user}/archive/${date}`).remove();

const setHistory = (user, date, value) => {
  const [year, month, day] = date.split('-');

  return database.ref(`${user}/dates/${year}/${month}/${day}`).set(value);
};

export const saveMemory = (user, date, text) =>
  Promise.all([
    setHistory(user, date, text === '' ? null : true),
    database.ref(`${user}/archive/${date}`).set(text === '' ? null : { text }),
  ]);

export const loadMemory = (user, date) =>
  database
    .ref(`${user}/archive/${date}`)
    .once('value')
    .then((res) => res.val()?.text);

export const loadDatesWithEntries = (
  user,
  year = format(new Date(), 'yyyy'),
  month = format(new Date(), 'MM'),
) =>
  database
    .ref(`${user}/dates/${year}/${month}`)
    .once('value')
    .then((res) => {
      const dates = res.val();
      if (dates) {
        return Object.keys(dates);
      }

      return [];
    });
