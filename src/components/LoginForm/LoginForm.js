import CardForm from 'components/CardForm';
import Input from 'components/Input';
import Button from 'components/Button';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit }) => (
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
          password={password}
          onChange={setPassword}
        />
      </>
    }
    button={<Button>Log in</Button>}
  />
);

export default LoginForm;
