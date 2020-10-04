import firebaseApp from './firebase';

export const database = firebaseApp.database();

export const deleteMemory = (user, date) =>
  database.ref(`${user}/${date}`).remove();

export const saveMemory = (user, date, text) =>
  text === ''
    ? deleteMemory(user, date)
    : database.ref(`${user}/${date}`).set({ text });

export const loadMemory = (user, date) =>
  database
    .ref(`${user}/${date}`)
    .once('value')
    .then((res) => res.val()?.text);

export const loadHistory = (user) => {
  return database
    .ref(`${user}`)
    .once('value')
    .then((res) => {
      const unprocessed = res.val();
      const processed = [];
      Object.entries(unprocessed).forEach(([date, memories]) => {
        Object.entries(memories).forEach(([key, memory]) => {
          processed.push({ date, text: memory, key });
        });
      });
      return processed.reverse();
    });
};
