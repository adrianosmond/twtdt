import { FC, FormEvent, useState } from 'react';
import { login } from 'lib/auth';
import LoginForm from 'components/LoginForm';

const LoginContainer: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    login(email, password).catch((err) => console.error(err));
  };

  const formIsInvalid =
    !email.includes('@') ||
    !email.includes('.') ||
    email.length < 1 ||
    password.length < 1;

  return (
    <LoginForm
      email={email}
      setEmail={(e) => setEmail((e.target as HTMLInputElement).value)}
      password={password}
      setPassword={(e) => setPassword((e.target as HTMLInputElement).value)}
      onSubmit={onSubmit}
      formIsInvalid={formIsInvalid}
    />
  );
};

export default LoginContainer;
