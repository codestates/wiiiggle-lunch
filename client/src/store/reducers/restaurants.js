import {
  loadRestaurantsLoading,
  loadRestaurantsDone,
  loadRestaurantsError,
  loadRestaurantDetailLoading,
  loadRestaurantDetailDone,
  loadRestaurantDetailError,
} from '../actions/restaurantsAction';

const initialState = {
  // 음식점 리스트
  restaurants: [],
  // 음식점 디테일 정보
  restaurant: null,
  // 음식점 리스트 요청
  restaurantsRequest: false,
  restaurantsSuccess: false,
  restaurantsFailure: null,
  // 평가 등록 요청
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
        restaurants: action.payload,
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
