/* eslint-disable */
import { toastShow, toastHide } from '@/store/reducers/toast';

const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

const userActionTypes = {
  LOGIN: 'users/login',
  SIGNUP: 'users/signup',
  LOGOUT: 'users/logout',
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
          toastShow({
            message: isError ? action.payload : '반갑습니다.',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHide()), 2000);
        next(action);
        break;
      case userActionTypes.SIGNUP:
        store.dispatch(
          toastShow({
            message: isError ? action.payload : '환영합니다.',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHide()), 2000);
        next(action);
        break;
      case userActionTypes.LOGOUT:
        store.dispatch(
          toastShow({
            message: isError ? action.payload : '안녕히가세요~',
            isWarning: isError,
          }),
        );
        setTimeout(() => store.dispatch(toastHide()), 2000);
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
