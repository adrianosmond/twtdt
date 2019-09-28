import firebaseApp from './firebase';

export const auth = firebaseApp.auth();

export const login = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
