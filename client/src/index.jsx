import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import GlobalStyles from '@/styles/GlobalStyles';
import store from '@/store';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
