import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddLead from './AddLead';
import AddEvent from './AddEvent';
import Table from './Table';

const MainDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), []);
  return (
    <div id="mainDisplay">
      <Switch>
        <Route exact path="/addLead" component={AddLead} />
        <Route exact path="/addEvent" component={AddEvent} />
      </Switch>
      <Table />
    </div>
  );
};

export default MainDisplay;
