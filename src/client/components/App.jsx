/* eslint-disable no-useless-constructor */
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { fetchData } from "../actions/dataActions";
import LogIn from "./LogIn";
import MainDisplay from "./MainDisplay";
import AddLead from "./AddLead";
import AddEvent from "./AddEvent";
import AppTable from "./AppTable";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);
  console.log(useQuery().get("authenticated"));
  if (useQuery().get("authenticated") === null) {
    console.log("login should render");
    return (
      <div id="app">
        <LogIn />
      </div>
    );
  } else {
    console.log("app should render");
    return (
      <div id="app">
        <AddLead />
        <AppTable />
        <Route path="/?authenticated=true/addEvent/:id" component={AddEvent} />
      </div>
    );
  }
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
