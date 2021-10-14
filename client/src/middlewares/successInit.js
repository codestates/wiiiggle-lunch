import {
  addPostsDone,
  updatePostsDone,
  deletePostsDone,
  initSuccessState,
} from '@/store/actions/postsAction';

const successInit = store => next => action => {
  next(action);
  if ([addPostsDone, updatePostsDone, deletePostsDone].includes(action.type)) {
    store.dispatch({ type: initSuccessState });
  }
};

export default successInit;
