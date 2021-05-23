import ReactDOM from 'react-dom';
import './styles/index.css';
import { UserProvider } from 'contexts/UserContext';
import { MemoryProvider } from 'contexts/MemoryContext';
import { HistoryProvider } from 'contexts/HistoryContext';
import { TagProvider } from 'contexts/TagContext';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <MemoryProvider>
      <HistoryProvider>
        <TagProvider>
          <App />
        </TagProvider>
      </HistoryProvider>
    </MemoryProvider>
  </UserProvider>,
  document.getElementById('root'),
);
