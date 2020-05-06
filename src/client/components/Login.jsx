import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';


const LogIn = () => {
  const { handleSubmit, errors } = useForm();

  return (
    <div id="login">
      Login
      <Switch>
        <Route exact path="/signin" component={signin} />
        <Route exact path="/mainDisplay" component={MainDisplay} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
