import ReactDOM from 'react-dom';
import './index.css';
import { AppProvider } from 'contexts/AppContext';
import App from './App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);
