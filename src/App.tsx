import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import useTodaysDate from 'hooks/useTodaysDate';
import WritingContainer from 'containers/WritingContainer';
import HistoryContainer from 'containers/HistoryContainer';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import { FC } from 'react';
import AppWrapper from 'components/AppWrapper';
import Header from 'components/Header';
import Typography from 'components/Typography';

const App:FC = () => {
  const user = useUser();
  const today = useTodaysDate();

  const isAuthenticated = user !== false;
  return (
    <Router>
      <AppWrapper>
        {isAuthenticated ? <Header /> : null}
        <Typography tagName="h1" appearance="h1">
          This was the day that
        </Typography>
        {isAuthenticated ? (
          <Switch>
            <Route path="/history" exact component={HistoryContainer} />
            <Route path="/:date" component={WritingContainer} />
            <Redirect to={`/${today}`} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={UnauthenticatedContainer} />
            <Redirect to="/" />
          </Switch>
        )}
      </AppWrapper>
    </Router>
  );
}

export default App;
