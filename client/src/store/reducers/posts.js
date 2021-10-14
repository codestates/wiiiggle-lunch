import { POST_API } from '@/services';

import {
  loadPostsLoading,
  loadPostsDone,
  loadPostsError,
  addPostsLoading,
  addPostsDone,
  addPostsError,
  updatePostsLoading,
  updatePostsDone,
  updatePostsError,
  deletePostsLoading,
  deletePostsDone,
  deletePostsError,
  initSuccessState,
} from '../actions/postsAction';
// * 평가 리스트 가져오기
export const loadPostsRequestAction = (lastId, size) => async dispatch => {
  try {
    dispatch({ type: loadPostsLoading });
    const res = await POST_API.getPosts(lastId, size);
    dispatch({ type: loadPostsDone, payload: res });
  } catch (e) {
    dispatch({ type: loadPostsError, payload: e });
  }
};

// * 평가 등록하기
export const addPostsRequestAction = (data, accessToken) => async dispatch => {
  try {
    dispatch({ type: addPostsLoading });
    const res = await POST_API.addPosts(data, accessToken);
    dispatch({ type: addPostsDone, payload: res });
  } catch (e) {
    dispatch({ type: addPostsError, payload: e });
  }
};

// * 평가 수정하기
export const updatePostsRequestAction = (data, id) => async dispatch => {
  try {
    dispatch({ type: updatePostsLoading });
    const res = await POST_API.updatePosts(data, id);
    dispatch({ type: updatePostsDone, payload: res });
  } catch (e) {
    dispatch({ type: updatePostsError, payload: e });
  }
};

// * 평가 삭제하기
export const deletePostsRequestAction = id => async dispatch => {
  try {
    dispatch({ type: deletePostsLoading });
    const res = await POST_API.deletePosts(id);
    dispatch({ type: deletePostsDone, payload: res });
  } catch (e) {
    dispatch({ type: deletePostsError, payload: e });
  }
};

const initialState = {
  // 평가 리스트
  posts: [],
  // 평가 리스트 요청
  postsRequest: false,
  postsSuccess: false,
  postsFailure: null,
  // 평가 등록 요청
  addPostRequest: false,
  addPostSuccess: false,
  addPostFailure: null,
  // 평가 수정 요청
  updatePostRequest: false,
  updatePostSuccess: false,
  updatePostFailure: null,
  // 평가 삭제 요청
  deletePostRequest: false,
  deletePostSuccess: false,
  deletePostFailure: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case loadPostsLoading:
      return {
        ...state,
        postsRequest: true,
        postsSuccess: false,
        postsFailure: null,
      };
    case loadPostsDone:
      return {
        ...state,
        postsRequest: false,
        postsSuccess: true,
        posts: action.payload,
        postsFailure: null,
      };
    case loadPostsError:
      return {
        ...state,
        postsRequest: false,
        postsSuccess: false,
        postsFailure: action.payload,
      };
    case addPostsLoading:
      return {
        ...state,
        addPostRequest: true,
        addPostSuccess: false,
        addPostFailure: null,
      };
    case addPostsDone:
      return {
        ...state,
        addPostRequest: false,
        addPostSuccess: true,
        addPostFailure: null,
      };
    case addPostsError:
      return {
        ...state,
        addPostRequest: false,
        addPostSuccess: false,
        addPostFailure: action.payload,
      };
    case updatePostsLoading:
      return {
        ...state,
        updatePostRequest: true,
        updatePostSuccess: false,
        updatePostFailure: null,
      };
    case updatePostsDone:
      return {
        ...state,
        updatePostRequest: false,
        updatePostSuccess: true,
        updatePostFailure: null,
      };
    case updatePostsError:
      return {
        ...state,
        updatePostRequest: false,
        updatePostSuccess: false,
        updatePostFailure: action.payload,
      };
    case deletePostsLoading:
      return {
        ...state,
        deletePostRequest: true,
        deletePostSuccess: false,
        deletePostFailure: null,
      };
    case deletePostsDone:
      return {
        ...state,
        deletePostRequest: false,
        deletePostSuccess: true,
        deletePostFailure: null,
      };
    case deletePostsError:
      return {
        ...state,
        deletePostRequest: false,
        deletePostSuccess: false,
        deletePostFailure: action.payload,
      };
    case initSuccessState:
      return {
        ...state,
        addPostSuccess: false,
        updatePostSuccess: false,
        deletePostSuccess: false,
      };
    default:
      return state;
  }
}
