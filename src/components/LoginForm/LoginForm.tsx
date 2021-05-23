import { ChangeEventHandler, FC, FormEvent } from 'react';
import CardForm from 'components/CardForm';
import Input from 'components/Input';
import Button from 'components/Button';

interface LoginFormProps {
  email: string;
  password: string;
  formIsInvalid: boolean;
  setEmail: ChangeEventHandler<HTMLInputElement>;
  setPassword: ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: FormEvent) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  formIsInvalid,
}) => (
  <CardForm
    title="Log in"
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
      </>
    }
    button={<Button disabled={formIsInvalid}>Log in</Button>}
  />
);

export default LoginForm;
