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
