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

export const loadHistory = (user) =>
  database
    .ref(`${user}`)
    .limitToLast(10)
    .once('value')
    .then((res) => {
      const unprocessed = res.val();
      const processed = [];
      Object.entries(unprocessed).forEach(([date, memories]) => {
        Object.values(memories).forEach((memory) => {
          processed.push({ date: new Date(date), text: memory, key: date });
        });
      });
      return processed.reverse();
    });
