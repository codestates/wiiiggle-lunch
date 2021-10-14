/* eslint-disable */
import { toastCreateAndShow, toastHideAndRemove } from '@/store/reducers/toast';

const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

const userActionTypes = {
  LOGIN: 'users/login',
  SIGNUP: 'users/signup',
  LOGOUT: 'users/logout',
};

const postsActionType = {
  ADD_POST: 'posts/addPosts',
  UPDATE_POST: 'posts/updatePosts',
  REMOVE_POST: 'posts/deletePosts',
};

const toast = store => next => action => {
  const types = action.type.split('/');
  const prefix = types.pop();
  const type = types.join('/');

  const isError = prefix === REJECTED;

  if ([FULLFILLED, REJECTED].includes(prefix)) {
    switch (type) {
      // 로그인, 회원가입, 로그아웃
      case userActionTypes.LOGIN:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '반갑습니다.',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      case userActionTypes.SIGNUP:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '환영합니다.',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      case userActionTypes.LOGOUT:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '안녕히가세요~',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      case postsActionType.ADD_POST:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '평가가 등록되었습니다!',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      case postsActionType.UPDATE_POST:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '평가가 수정되었습니다!',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      case postsActionType.REMOVE_POST:
        store.dispatch(
          toastCreateAndShow({
            message: isError ? action.payload : '평가가 삭제되었습니다!',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHideAndRemove), 1500);
        next(action);
        break;
      default:
        next(action);
    }
  } else {
    next(action);
  }
};

export default toast;
