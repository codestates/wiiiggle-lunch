/* eslint-disable */
import { toastShow, toastHide } from '@/store/reducers/toast';
import {
  loginLoading,
  loginDone,
  loginError,
  logoutLoading,
  logoutDone,
  logoutError,
  signupLoading,
  signupDone,
  signupError,
} from '@/store/actions/usersAction';

const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

const toast = store => next => action => {
  // 로그인, 회원가입, 로그아웃, 글쓰기 -> 토스트 메세지 출력
  const prefix = action.type.split('/').pop();
  const isError = prefix === REJECTED;

  if ([FULLFILLED, REJECTED].includes(prefix)) {
    switch (action.type) {
      case loginDone:
        console.log(`${action.type} === ${loginDone}`);
        store.dispatch(
          toastShow({
            message: isError ? action.payload.message : '반갑습니다.',
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
