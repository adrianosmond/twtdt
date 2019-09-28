import React from 'react';
import { useApp } from 'contexts/AppContext';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import AuthenticatedContainer from 'containers/AuthenticatedContainer';
import AppWrapper from 'components/AppWrapper';

function App() {
  const { user, date } = useApp();
  const isAuthenticated = user !== false;
  return (
    <AppWrapper isAuthenticated={isAuthenticated} date={date}>
      {isAuthenticated ? (
        <AuthenticatedContainer />
      ) : (
        <UnauthenticatedContainer />
      )}
    </AppWrapper>
  );
}

export default App;
