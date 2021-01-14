import React, { useState } from 'react';
import { createUser } from 'lib/auth';
import SignUpForm from 'components/SignUpForm';

const SignUpContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createUser(email, password).catch((error) =>
      // eslint-disable-next-line no-console
      console.error('failed:', error.message),
    );
  };

  const formIsInvalid =
    !email.includes('@') ||
    !email.includes('.') ||
    email.length < 3 ||
    password.length < 8 ||
    password !== password2;

  return (
    <SignUpForm
      email={email}
      setEmail={(e) => setEmail(e.target.value)}
      password={password}
      setPassword={(e) => setPassword(e.target.value)}
      password2={password2}
      setPassword2={(e) => setPassword2(e.target.value)}
      onSubmit={onSubmit}
      formIsInvalid={formIsInvalid}
    />
  );
};

export default SignUpContainer;
