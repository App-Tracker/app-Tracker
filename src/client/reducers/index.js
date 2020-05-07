import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import addLeadReducer from './addLeadReducer';
import addEventReducer from './addEventReducer';

const reducers = combineReducers({
  data: dataReducer,
  addLead: addLeadReducer,
  addEvent: addEventReducer,
//   user: userReducer, // ??
//   authenticated: authenticationReducer, // ??
});

export default reducers;
