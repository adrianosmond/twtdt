import { TAG_TYPES } from 'contexts/TagContext';
import { format } from 'date-fns';
import firebaseApp from './firebase';

export const database = firebaseApp.database();

export const deleteMemory = (user: string, date: string): Promise<void> =>
  database.ref(`${user}/archive/${date}`).remove();

const setHistory = (
  user: string,
  date: string,
  value: boolean | null,
): Promise<firebaseApp.database.ThenableReference> => {
  const [year, month, day] = date.split('-');

  return database.ref(`${user}/dates/${year}/${month}/${day}`).set(value);
};

export const saveMemory = (
  user: string,
  date: string,
  text: string,
): Promise<
  [
    firebaseApp.database.ThenableReference,
    firebaseApp.database.ThenableReference,
  ]
> =>
  Promise.all([
    setHistory(user, date, text === '' ? null : true),
    database.ref(`${user}/archive/${date}`).set(text === '' ? null : { text }),
  ]);

export const loadMemory = (user: string, date: string): Promise<string> =>
  database
    .ref(`${user}/archive/${date}`)
    .once('value')
    .then((res) => res.val()?.text);

export const loadDatesWithEntries = (
  user: string,
  year = format(new Date(), 'yyyy'),
  month = format(new Date(), 'MM'),
): Promise<string[]> =>
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

export const createTag = (
  user: string,
  type: TAG_TYPES,
  name: string,
): firebaseApp.database.ThenableReference =>
  database.ref(`${user}/tags`).push({ type, name });

export const addTagToDate = (
  user: string,
  date: string,
  tagId: string,
): Promise<
  [
    firebaseApp.database.ThenableReference,
    firebaseApp.database.ThenableReference,
  ]
> =>
  Promise.all([
    database.ref(`${user}/archive/${date}/tags/${tagId}`).set(true),
    database.ref(`${user}/tags/${tagId}/dates/${date}`).set(true),
  ]);

export const createTagAndAddToDate = (
  user: string,
  type: TAG_TYPES,
  name: string,
  date: string,
): Promise<void> =>
  createTag(user, type, name).then(({ key }) => {
    if (key) {
      addTagToDate(user, date, key);
    }
  });
