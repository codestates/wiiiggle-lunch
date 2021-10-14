import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from '@/middlewares/thunk';
import toast from '@/middlewares/toast';
import successInit from '@/middlewares/successInit';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, toast, successInit)),
);

export default store;
