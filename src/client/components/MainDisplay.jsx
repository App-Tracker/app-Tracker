import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddLead from './AddLead';
import AddEvent from './AddEvent';
import AppTable from './AppTable';

const MainDisplay = () => {
  const dispatch = useDispatch();
  console.log('say hi');
  useEffect(() => dispatch(fetchData()), []);
  return (
    <div id="mainDisplay">
      <AddLead />
      <AppTable />
      <Route path="/addEvent/:id" component={AddEvent} />
    </div>
  );
};

export default MainDisplay;
