import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App';
import GlobalStyles from '@/styles/GlobalStyles';
import store from '@/store';
import ScrollToTop from './hooks/ScrollTop';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <GlobalStyles />
    <App />
  </Router>,
  document.getElementById('root'),
);
