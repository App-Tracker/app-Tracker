/**
 * Manipulates store.addLead
 */
import * as types from '../constants/actionTypes';

const initialState = {
  data: {
    company: null,
    link: null,
    position: null,
    cv: null,
    cl: null,
    recruiter: null,
    notes: null,
  },
  loading: false,
  error: '',
};

const addLeadReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LEAD_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };
    case types.ADD_LEAD_SUCCESS:
      return {
        data: { ...initialState },
        loading: false,
        error: '',
      };
    case types.ADD_LEAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addLeadReducer;
