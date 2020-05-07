/* eslint-disable no-useless-constructor */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchData } from '../actions/dataActions';
import LogIn from './LogIn';
import AppTable from './AppTable';
import AddLead from './AddLead';
import AddEvent from './AddEvent';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);

  return (
    <div id="app">
      <LogIn/>
      <AddLead/>
      <AddLead/>
      <AppTable/>
      <Route path="/addEvent/:id" component={AddEvent} />
    </div>
  );
};
export default App;
