import LoginContainer from 'containers/LoginContainer';
import SignUpContainer from 'containers/SignUpContainer';
import Flexer from 'components/Flexer';

const UnauthenticatedContainer = () => (
  <Flexer>
    <LoginContainer />
    <SignUpContainer />
  </Flexer>
);

export default UnauthenticatedContainer;
