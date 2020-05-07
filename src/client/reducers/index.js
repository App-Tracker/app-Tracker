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

/**
 * 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  events: {
    notes: String,
    event_type: String,
    date: String,
    reminder_in: Integer,
    followup_after: Integer
  },
});

const leadsSchema = new Schema({
  leads: {
    id: Number,
    company: String,
    link: String,
    position: String,
    cv: String,
    cl: String,
    events: [eventsSchema],
  },
});

const userSchema = new Schema({
  username: String,
  leads: [leadsSchema], // array of leads
});
 */