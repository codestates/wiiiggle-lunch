import { RESTAURANT_API } from '@/services';

import {
  loadRestaurantsLoading,
  loadRestaurantsDone,
  loadRestaurantsError,
  loadRestaurantDetailLoading,
  loadRestaurantDetailDone,
  loadRestaurantDetailError,
} from '../actions/restaurantsAction';

// * 음식점 리스트 가져오기
export const loadRestaurantsRequestAction =
  (lastId, query, size) => async dispatch => {
    try {
      dispatch({ type: loadRestaurantsLoading });
      const res = await RESTAURANT_API.getRestaurantList(lastId, query, size);
      dispatch({ type: loadRestaurantsDone, payload: res });
    } catch (e) {
      dispatch({ type: loadRestaurantsError, payload: e.message });
    }
  };
// * 음식점 상세 정보 가져오기
export const RestaurantsDetailRequestAction = id => async dispatch => {
  try {
    dispatch({ type: loadRestaurantDetailLoading });
    const res = await RESTAURANT_API.getRestaurant(id);
    dispatch({ type: loadRestaurantDetailDone, payload: res });
  } catch (e) {
    dispatch({ type: loadRestaurantDetailError, payload: e.message });
  }
};

const initialState = {
  // 음식점 리스트
  restaurants: [],
  // 음식점 디테일 정보
  restaurant: null,
  // 음식점 리스트 요청
  restaurantsRequest: false,
  restaurantsSuccess: false,
  restaurantsFailure: null,
  // 음식점 디테일 정보 가져요기
  restaurantsDetailRequest: false,
  restaurantsDetailSuccess: false,
  restaurantsDetailFailure: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case loadRestaurantsLoading:
      return {
        ...state,
        restaurantsRequest: true,
        restaurantsSuccess: false,
        restaurantsFailure: null,
      };
    case loadRestaurantsDone:
      return {
        ...state,
        restaurantsRequest: false,
        restaurantsSuccess: true,
        restaurants: [...state.restaurants, ...action.payload],
        restaurantsFailure: null,
      };
    case loadRestaurantsError:
      return {
        ...state,
        restaurantsRequest: false,
        restaurantsSuccess: false,
        restaurantsFailure: action.payload,
      };
    case loadRestaurantDetailLoading:
      return {
        ...state,
        restaurantsDetailRequest: true,
        restaurantsDetailSuccess: false,
        restaurantsDetailFailure: null,
      };
    case loadRestaurantDetailDone:
      return {
        ...state,
        restaurantsDetailRequest: false,
        restaurantsDetailSuccess: true,
        restaurant: action.payload,
        restaurantsDetailFailure: null,
      };
    case loadRestaurantDetailError:
      return {
        ...state,
        restaurantsDetailRequest: false,
        restaurantsDetailSuccess: false,
        restaurantsDetailFailure: action.payload,
      };
    default:
      return state;
  }
}
