import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import CardForm from 'components/CardForm';

const SignUpForm = ({
  email,
  setEmail,
  password,
  setPassword,
  password2,
  setPassword2,
  onSubmit,
  formIsInvalid,
}) => (
  <CardForm
    title="Sign up"
    onSubmit={onSubmit}
    inputs={
      <>
        <Input
          type="email"
          label="Email address"
          value={email}
          onChange={setEmail}
        />
        <Input
          type="password"
          label="Password"
          password={password}
          onChange={setPassword}
        />
        <Input
          type="password"
          label="Confirm Password"
          password={password2}
          onChange={setPassword2}
        />
      </>
    }
    button={<Button disabled={formIsInvalid}>Sign Up</Button>}
  />
);

export default SignUpForm;
