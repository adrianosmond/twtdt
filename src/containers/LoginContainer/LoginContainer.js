import React, { useState } from 'react';
import { login } from 'lib/auth';
import LoginForm from 'components/LoginForm';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    login(email, password).catch((err) => console.error(err));
  };
  return (
    <LoginForm
      email={email}
      setEmail={(e) => setEmail(e.target.value)}
      password={password}
      setPassword={(e) => setPassword(e.target.value)}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
