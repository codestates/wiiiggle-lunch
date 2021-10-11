import { PHOTO_API } from '@/services';

import {
  uploadPhotoLoading,
  uploadPhotoDone,
  uploadPhotoError,
} from '../actions/photoAction';

const initialState = {
  postsRequest: false,
  postsSuccess: false,
  postsFailure: null,
  message: null,
};
// 사진 업로드
export const uploadImgRequest = formData => async dispatch => {
  try {
    dispatch({ type: uploadPhotoLoading });
    const res = await PHOTO_API.uploadPhoto(formData);
    dispatch({ type: uploadPhotoDone, payload: res });
  } catch (e) {
    dispatch({ type: uploadPhotoError, payload: e });
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case uploadPhotoLoading:
      return {
        postsRequest: true,
        postsSuccess: false,
        postsFailure: null,
      };
    case uploadPhotoDone:
      return {
        postsRequest: false,
        postsSuccess: true,
        postsFailure: null,
        message: action.payload,
      };
    case uploadPhotoError:
      return {
        postsRequest: false,
        postsSuccess: false,
        postsFailure: action.payload,
      };
    default:
      return state;
  }
}
