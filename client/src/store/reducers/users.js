import { USER_API } from '@/services';
import {
  loadUserLoading,
  loadUserDone,
  loadUserError,
  loginLoading,
  loginDone,
  loginError,
  logoutLoading,
  logoutDone,
  logoutError,
  signupLoading,
  signupDone,
  signupError,
} from '../actions/usersAction';

// * 유저 정보 가져오기
export const loadUserRequestAction = async dispatch => {
  try {
    dispatch({ type: loadUserLoading });
    const res = await USER_API.getUserInfo();
    dispatch({ type: loadUserDone, payload: res });
  } catch (e) {
    dispatch({ type: loadUserError, payload: e });
  }
};

// * 로그인 요청
export const loginRequestAction = data => async dispatch => {
  try {
    dispatch({ type: loginLoading });
    const res = await USER_API.postLogin(data);
    dispatch({ type: loginDone, payload: res });
  } catch (e) {
    dispatch({ type: loginError, payload: e });
  }
};

// * 로그아웃 요청
export const logoutRequestAction = async dispatch => {
  try {
    dispatch({ type: logoutLoading });
    const res = await USER_API.getLogout();
    dispatch({ type: logoutDone, payload: res });
  } catch (e) {
    dispatch({ type: logoutError, payload: e });
  }
};

// * 회원가입 요청
export const signupRequestAction = data => async dispatch => {
  try {
    dispatch({ type: signupLoading });
    const res = await USER_API.postSignup(data);
    dispatch({ type: signupDone, payload: res });
  } catch (e) {
    dispatch({ type: signupError, payload: e });
  }
};

// TODO: 유저 정보 수정

const initialState = {
  // 유저정보
  userInfo: null,
  // 유저 정보 요청
  userInfoRequest: false,
  userInfoSuccess: false,
  userInfoFailure: null,
  // 로그인 요청
  loginRequest: false,
  loginDoneSuccess: false,
  loginErrorFailure: null,
  // 로그아웃 요청
  logoutRequest: false,
  logoutSuccess: false,
  logoutFailure: null,
  // 회원가입 요청
  signupRequest: false,
  signupSuccess: false,
  signupFailure: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case loadUserLoading:
      return {
        ...state,
        userInfoRequest: true,
        userInfoSuccess: false,
        userInfoFailure: null,
      };
    case loadUserDone:
      return {
        ...state,
        userInfoRequest: false,
        userInfoSuccess: true,
        userInfo: action.payload,
        userInfoFailure: null,
      };
    case loadUserError:
      return {
        ...state,
        userInfoRequest: false,
        userInfoSuccess: false,
        userInfoFailure: action.payload,
      };
    case loginLoading:
      return {
        ...state,
        loginRequest: true,
        loginDoneSuccess: false,
        loginErrorFailure: null,
      };
    case loginDone:
      return {
        ...state,
        userInfo: action.payload,
        loginRequest: false,
        loginDoneSuccess: true,
        loginErrorFailure: false,
      };
    case loginError:
      return {
        ...state,
        loginRequest: false,
        loginDoneSuccess: false,
        loginErrorFailure: action.payload,
      };
    case logoutLoading:
      return {
        ...state,
        logoutRequest: true,
        logoutSuccess: false,
        logoutFailure: null,
      };
    case logoutDone:
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: true,
        logoutFailure: null,
      };
    case logoutError:
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: false,
        logoutFailure: action.payload,
      };
    case signupLoading:
      return {
        ...state,
        signupRequest: true,
        signupSuccess: false,
        signupFailure: null,
      };
    case signupDone:
      return {
        ...state,
        signupRequest: false,
        signupSuccess: true,
        signupFailure: null,
      };
    case signupError:
      return {
        ...state,
        signupRequest: false,
        signupSuccess: false,
        signupFailure: action.payload,
      };
    default:
      return state;
  }
}
