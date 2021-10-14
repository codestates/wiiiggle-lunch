// action type
const SHOW = 'toast/show';
const HIDE = 'toast/hide';

// initialState
const initialState = {
  alerts: [
    // {message: '', isWarning: false},
  ],
};

// Action Creator
export const toastShow = ({ message, isWarning }) => ({
  type: SHOW,
  payload: { message, isWarning },
});
export const toastHide = () => ({ type: HIDE });

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        alerts: [...state.alerts, action.payload],
      };
    case HIDE:
      return {
        alerts: [...state.alerts.slice(1)],
      };
    default:
      return state;
  }
}
