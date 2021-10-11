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
} from '../actions/postsAction';

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
    default:
      return state;
  }
}
