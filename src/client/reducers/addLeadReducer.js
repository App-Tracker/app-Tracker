/**
 * 
 */
import * as types from '../constants/actionTypes';

const initialState = {
  data: {
    company: null,
    position: null,
    link: null,
    resume_used: null,
    cv_used: null,
    recruiter: null,
    notes: null,
  },
  loading: false,
  error: '',
};

const addLeadReducer = (state = initialState, action) => {
  switch (action.type){
    case types.ADD_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_LEAD_SUCCESS:
      return {
        ...state,
        loading: false,
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
