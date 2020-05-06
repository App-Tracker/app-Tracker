/**
 * Manipulates store.data
 * store.data.leads is an array of all leads.
 */
import * as types from '../constants/actionTypes';

const intialState = {
  leads: [],
  loading: false,
  error: '',
};

const dataReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        leads: [...action.payload],
        loading: false,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_LEAD:
      return {
        ...state,
        leads: [action.payload, ...state.leads],
      };
    case types.DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case types.UPDATE_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) => lead.id === action.payload.id ? action.payload : lead),
      };
    case types.ADD_EVENT:
      return {
        ...state,
        //leads: state.leads.map((lead) => lead.id == )
      };
    case types.DELETE_EVENT:
      return {

      };
    case types.UPDATE_EVENT:
      return {

      };
    default:
      return state;
  }
};

export default dataReducer;

