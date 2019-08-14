import React, { useState } from 'react';
import { auth } from 'database';
import LoginForm from 'components/LoginForm';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.error(err));
  };
  return (
    <LoginForm
      email={email}
      setEmail={e => setEmail(e.target.value)}
      password={password}
      setPassword={e => setPassword(e.target.value)}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
