import { format } from 'date-fns';
import firebaseApp from './firebase';

export const database = firebaseApp.database();

export const deleteMemory = (user, date) =>
  database.ref(`${user}/${date}`).remove();

export const saveMemory = (user, date, text) =>
  text === ''
    ? deleteMemory(user, date)
    : database.ref(`${user}/archive/${date}`).set({ text });

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
    .then((res) => Object.keys(res.val()));
