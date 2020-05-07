import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  updateLogin,
  updateUsername,
  updatePassword,
} from '../actions/loginActions';

const Login = () => {
  const dispatch = useDispatch();
  // const { username, password } = useSelector((state) => {
  //   return {
  //     username: state.username,
  //     password: state.password,
  //   };
  // }, shallowEqual);

  // const oAuthRedirect = () => {
  //   console.log('oauth fetch working');
  //   fetch('http://localhost:3000/google', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
      <div id="oAuth">
        <a href="http://localhost:3000/google">Login With Google</a>
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
