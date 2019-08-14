import React from 'react';
import { useUser } from 'contexts/AppContext';
import { auth } from 'database';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import AuthenticatedContainer from 'containers/AuthenticatedContainer';
import AppWrapper from 'components/AppWrapper';

function App() {
  const user = useUser();
  const isAuthenticated = user !== false;
  return (
    <AppWrapper isAuthenticated={isAuthenticated} logout={() => auth.signOut()}>
      {isAuthenticated ? (
        <AuthenticatedContainer />
      ) : (
        <UnauthenticatedContainer />
      )}
    </AppWrapper>
  );
}

export default App;
