import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useApp } from 'contexts/AppContext';
import WritingContainer from 'containers/WritingContainer';
import HistoryContainer from 'containers/HistoryContainer';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import AppWrapper from 'components/AppWrapper';
import Header from 'components/Header';
import Typography from 'components/Typography';

function App() {
  const { user } = useApp();
  const isAuthenticated = user !== false;
  return (
    <Router>
      <AppWrapper>
        {isAuthenticated ? <Header /> : null}
        <Typography as="h1" appearance="h1">
          This was the day that
        </Typography>
        {isAuthenticated ? (
          <Switch>
            <Route path="/" exact component={WritingContainer} />
            <Route path="/history" component={HistoryContainer} />
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
