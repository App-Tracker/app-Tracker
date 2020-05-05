import * as types from '../constants/actionTypes';

const intialState = {
  data: [],
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
        data: action.payload,
        loading: false,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
