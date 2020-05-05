/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
// import { Switch } from 'react-router-dom';
import { fetchData } from '../actions/dataActions';
import LogIn from './LogIn';
import Table from './Table';
import AddLead from './AddLead';
import AddEvent from './AddEvent';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);
  return (
    <div id="app">
      <LogIn/>
      <AddLead/>
      <Table/>
      <AddEvent/>
    </div>
  );
};

export default App;

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