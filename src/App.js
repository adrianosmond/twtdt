import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import WritingContainer from 'containers/WritingContainer';
import HistoryContainer from 'containers/HistoryContainer';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import AppWrapper from 'components/AppWrapper';
import Header from 'components/Header';
import Typography from 'components/Typography';
import { formatDateString } from 'utils/date';

function App() {
  const user = useUser();
  const today = formatDateString(new Date());

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
