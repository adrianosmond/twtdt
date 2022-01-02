import {
  get,
  getDatabase,
  push,
  ref,
  remove,
  set,
  ThenableReference,
} from 'firebase/database';
import { TAG_TYPES } from 'contexts/TagContext';
import { format } from 'date-fns';
import firebaseApp from './firebase';

export const database = getDatabase(firebaseApp);

export const deleteMemory = (user: string, date: string): Promise<void> =>
  remove(ref(database, `${user}/archive/${date}`));

const setHistory = (
  user: string,
  date: string,
  value: boolean | null,
): Promise<void> => {
  const [year, month, day] = date.split('-');

  return set(ref(database, `${user}/dates/${year}/${month}/${day}`), value);
};

export const saveMemory = (
  user: string,
  date: string,
  text: string,
): Promise<[void, void]> =>
  Promise.all([
    setHistory(user, date, text === '' ? null : true),
    set(
      ref(database, `${user}/archive/${date}`),
      text === '' ? null : { text },
    ),
  ]);

export const loadMemory = (user: string, date: string): Promise<string> =>
  get(ref(database, `${user}/archive/${date}`)).then((res) => res.val()?.text);

export const loadDatesWithEntries = (
  user: string,
  year = format(new Date(), 'yyyy'),
  month = format(new Date(), 'MM'),
): Promise<string[]> =>
  get(ref(database, `${user}/dates/${year}/${month}`)).then((res) => {
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
): ThenableReference => push(ref(database, `${user}/tags`), { type, name });

export const addTagToDate = (
  user: string,
  date: string,
  tagId: string,
): Promise<void> =>
  set(ref(database, `${user}/tags/${tagId}/dates/${date}`), true);

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

export const removeTagFromDate = (
  user: string,
  date: string,
  tagId: string,
): Promise<void | null> =>
  set(ref(database, `${user}/tags/${tagId}/dates/${date}`), null)
    // If that was the only time the tag was in use, delete the whole thing
    .then(() =>
      get(ref(database, `${user}/tags/${tagId}/dates/`)).then((res) => {
        const dates = res.val();
        if (!dates) {
          return set(ref(database, `${user}/tags/${tagId}`), null);
        }
        return null;
      }),
    );
