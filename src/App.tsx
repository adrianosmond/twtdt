import { VFC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import WritingContainer from 'containers/WritingContainer';
import HistoryContainer from 'containers/HistoryContainer';
import AllTagsContainer from 'containers/AllTagsContainer';
import TagsContainer from 'containers/TagsContainer';
import UnauthenticatedContainer from 'containers/UnauthenticatedContainer';
import AppWrapper from 'components/AppWrapper';
import Header from 'components/Header';
import Typography from 'components/Typography';
import useTodaysDate from 'hooks/useTodaysDate';

const App: VFC = () => {
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
          <Routes>
            <Route path="/history" element={<HistoryContainer />} />
            <Route path="/tags" element={<AllTagsContainer />} />
            <Route path="/tags/:tagId" element={<TagsContainer />} />
            <Route path="/:date" element={<WritingContainer />} />
            <Route path="*" element={<Navigate to={`/${today}`} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<UnauthenticatedContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </AppWrapper>
    </Router>
  );
};

export default App;
