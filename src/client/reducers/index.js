import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import addLeadReducer from './addLeadReducer';

const reducers = combineReducers({
  data: dataReducer,
  addLead: addLeadReducer,
//   user: userReducer, // ??
//   authenticated: authenticationReducer, // ??
//   rules: rulesReducer,
});

export default reducers;
