import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import restaurants from './restaurants';

const rootReducer = combineReducers({
  users,
  posts,
  restaurants,
});

export default rootReducer;
