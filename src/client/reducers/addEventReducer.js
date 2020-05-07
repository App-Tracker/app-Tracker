/**
 * Manipulates store.addEvent
 */
import * as types from '../constants/actionTypes';

const initialState = {
  data: {
    event_type: null,
    date: null,
    notes: null,
    reminder_before: null,
    followup_after: null,
  },
  loading: false,
  error: '',
};

const addEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EVENT_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };
    case types.ADD_EVENT_SUCCESS:
      return {
        data: { ...initialState },
        loading: false,
        error: '',
      };
    case types.ADD_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addEventReducer;
