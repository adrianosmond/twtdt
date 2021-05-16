import { FC } from 'react';
import LoginContainer from 'containers/LoginContainer';
import SignUpContainer from 'containers/SignUpContainer';
import Flexer from 'components/Flexer';

const UnauthenticatedContainer: FC = () => (
  <Flexer>
    <LoginContainer />
    <SignUpContainer />
  </Flexer>
);

export default UnauthenticatedContainer;
