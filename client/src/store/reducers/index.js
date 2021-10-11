import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import restaurants from './restaurants';
import photos from './photos';

const rootReducer = combineReducers({
  users,
  posts,
  restaurants,
  photos,
});

export default rootReducer;
