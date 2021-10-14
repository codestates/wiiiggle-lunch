// action type
const CREATE = 'toast/create';
const SHOW = 'toast/show';
const HIDE = 'toast/hide';
const REMOVE = 'toast/remove';

// initialState
const initialState = {
  alerts: [
    // {message: '', isWarning: false, open: false},
  ],
};

// Action Creator
export const toastCreateAndShow =
  ({ message, isWarning }) =>
  async dispatch => {
    const id = Math.floor(Math.random() * 1000);
    dispatch({
      type: CREATE,
      payload: { id, message, isWarning },
    });
    await new Promise(resolve => setTimeout(() => resolve(), 500));
    dispatch({
      type: SHOW,
      payload: id,
    });
  };

export const toastHideAndRemove = async dispatch => {
  dispatch({ type: HIDE });
  await new Promise(resolve => setTimeout(() => resolve(), 500));
  dispatch({ type: REMOVE });
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        alerts: [...state.alerts, { ...action.payload, open: false }],
      };
    case SHOW:
      return {
        alerts: state.alerts.map(alert =>
          alert.id === action.payload
            ? {
                ...alert,
                open: true,
              }
            : alert,
        ),
      };
    case HIDE:
      return {
        alerts: [{ ...state.alerts[0], open: false }, ...state.alerts.slice(1)],
      };
    case REMOVE:
      return {
        alerts: [...state.alerts.slice(1)],
      };
    default:
      return state;
  }
}
