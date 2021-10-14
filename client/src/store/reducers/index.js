import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import restaurants from './restaurants';
import photos from './photos';
import toast from './toast';

const rootReducer = combineReducers({
  users,
  posts,
  restaurants,
  photos,
  toast,
});

export default rootReducer;
