import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';
import {
  updateLogin,
  updateUsername,
  updatePassword,
} from '../actions/loginActions';


const Login = () => {
  const dispatch = useDispatch();
  const { username, password, login } = useSelector((state) => {
    return {
      username: state.username,
      password: state.password,
    };
  }, shallowEqual);

  const loginBtn = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        dispatch(updateLogin(data));
      });
  };

  const oAuthRedirect = () => {
    fetch('/google', {
      method: 'GET',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <input
        id="usernameId"
        onChange={(e) => dispatch(updateUsername(e.target.value))}
        type="text"
        placeholder="username"
        required
      />
      <input
        id="passwordId"
        onChange={(e) => dispatch(updatePassword(e.target.value))}
        type="text"
        placeholder="password"
        required
      />
      <button id="loginButton" onClick={() => loginBtn()} type="submit">
        Log in
      </button>
      <div id="oAuth">
        <button id="oAuthBtn" onClick={() => oAuthRedirect()} type="submit">
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

// const LogIn = () => {
//   const { handleSubmit, errors } = useForm();

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(LogIn);


// <Switch>
// <Route exact path="/signin" component={signin} />
// <Route exact path="/mainDisplay" component={MainDisplay} />
// </Switch>
