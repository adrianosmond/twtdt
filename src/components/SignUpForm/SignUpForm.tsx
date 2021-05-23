import { ChangeEventHandler, FC, FormEvent } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import CardForm from 'components/CardForm';

interface SignUpFormProps {
  email: string;
  password: string;
  password2: string;
  setEmail: ChangeEventHandler<HTMLInputElement>;
  setPassword: ChangeEventHandler<HTMLInputElement>;
  setPassword2: ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: FormEvent) => void;
  formIsInvalid: boolean;
}

const SignUpForm: FC<SignUpFormProps> = ({
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
          value={password}
          onChange={setPassword}
        />
        <Input
          type="password"
          label="Confirm Password"
          value={password2}
          onChange={setPassword2}
        />
      </>
    }
    button={<Button disabled={formIsInvalid}>Sign Up</Button>}
  />
);

export default SignUpForm;
