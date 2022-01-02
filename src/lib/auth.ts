import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import firebaseApp from './firebase';

export const auth = getAuth(firebaseApp);

export const login = (
  email: string,
  password: string,
): Promise<UserCredential> => signInWithEmailAndPassword(auth, email, password);

export const logout = (): Promise<void> => auth.signOut();

export const createUser = (
  email: string,
  password: string,
): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password);
