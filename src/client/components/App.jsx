/* eslint-disable no-useless-constructor */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import {
  Route, useLocation,
} from 'react-router-dom';
import { fetchData } from '../actions/dataActions';
import LogIn from './LogIn';
import AddLead from './AddLead';
import AddEvent from './AddEvent';
import AppTable from './AppTable';

/**
 * Get URL Search Params
 */
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);
  if (useQuery().get('authenticated') === null) {
    return (
      <div id="app">
        <LogIn />
      </div>
    );
  }
  return (
    <div id="app">
      <AddLead />
      <AppTable />
      <AddEvent />
      <Route path="/?authenticated=true/addEvent/:id" component={AddEvent} />
    </div>
  );
  // return (
  //   <div id="app">
  //     <Switch>
  //       <Route exact path="/" component={LogIn} />
  //       <Route exact path="/?authenticated=true" component={MainDisplay} />
  //     </Switch>
  //     {/* <AddLead />
  //     <AppTable />
  //     <Route path="/addEvent/:id" component={AddEvent} /> */}
  //   </div>
  // );
};
export default App;
