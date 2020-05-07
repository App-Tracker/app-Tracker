import * as types from '../constants/actionTypes';

const initialState = {
    isLoggedIn: null,
    username: null,
    password: null,
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_LOGIN: {
      return {
        ...state, isLoggedIn: action.payload
      };
    case types.UPDATE_USERNAME:
      return {
        ...state, username: action.payload
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state, password: action.payload
      };
    };
  };
};

export default loginReducer;