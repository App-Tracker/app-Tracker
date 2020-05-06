import * as types from '../constants/actionTypes';

const initialState = {
  data: {
    isLoggedIn: null,
    username: null,
    password: null,
  }
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_LOGIN: {
      return {
        ...state,
      data: {isLoggedIn: action.payload}
      };
    case types.UPDATE_USERNAME:
      return {
        ...state,
        data: {username: action.payload}
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        data: {password: action.payload}
      };
    };
  };
};

export default loginReducer;