/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchData } from '../actions/dataActions';
import Login from './Login';
import SwitchBase from '@material-ui/core/internal/SwitchBase';
import MainDisplay from './MainDisplay';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);
  return (
    <div id="app">
      {/* <Link to="/mainDisplay"> test </Link> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/mainDisplay" component={MainDisplay} />
        
        {/* <Route
          exact
          path="/"
          component={() => {
            if (loggedState === 'User') {
              return <MainDisplay />;
            } else {
              return <Login />; */}
            }
          }}
        />
      </Switch>
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
