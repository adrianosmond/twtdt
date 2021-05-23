import firebaseApp from './firebase';

export const auth = firebaseApp.auth();

export const login = (
  email: string,
  password: string,
): Promise<firebaseApp.auth.UserCredential> =>
  auth.signInWithEmailAndPassword(email, password);

export const logout = (): Promise<void> => auth.signOut();

export const createUser = (
  email: string,
  password: string,
): Promise<firebaseApp.auth.UserCredential> =>
  auth.createUserWithEmailAndPassword(email, password);
