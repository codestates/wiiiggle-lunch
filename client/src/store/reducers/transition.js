const ADD = 'transition/add';

const pageType = {
  main: 'MAIN',
  login: 'LOGIN',
  signup: 'SIGNUP',
  mypage: 'MYPAGE',
  create: 'CREATE',
  restaurants: 'RESTAURANTS',
  search: 'SEARCH',
  mylist: 'MYLIST',
};

const initialState = {
  LANDING: null,
  MAIN: null,
  LOGIN: null,
  SIGNUP: null,
  MYPAGE: null,
  CREATE: null,
  DETAIL: null,
  SEARCH: null,
  MYLIST: null,
};

export const addTransition = (path, state) => {
  const page = path.split('/')[1];
  return {
    type: ADD,
    page: pageType[page],
    payload: state,
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.page]: action.payload,
      };
    default:
      return state;
  }
}
