import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import restaurants from './restaurants';
import photos from './photos';
import toast from './toast';
import transition from './transition';

const rootReducer = combineReducers({
  users,
  posts,
  restaurants,
  photos,
  toast,
  transition,
});

export default rootReducer;
