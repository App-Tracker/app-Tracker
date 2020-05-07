const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passportOauth/passport-setup');

const app = express();
const PORT = 3000;

/* Webpack/ Webpack Compiler */

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  })
);
app.use(require('webpack-hot-middleware')(compiler));

const authController = require('./middleware/authControllers');
const request = require('request');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Handle parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    name: 'App Tracker',
    keys: ['key1', 'key2'],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.get('/failed', (req, res) => `You failed to log in!`);
// app.get('/success', authController.isLoggedIn, (req, res) =>
//   res.redirect('/mainDisplay')
//);
// res.send(`Welcome ${req.user.displayName}!`));
app.get('/success', (req, res) => res.send('Login success!'));

// app.get(
//   '/google',
//   (req, res, next) => {
//     request(
//       { url: 'https://accounts.google.com/o/oauth2/v2/auth' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return next(error);
//         }

//         res.json(JSON.parse(body));
//         return next();
//       }
//     );
//   },
//   passport.authenticate('google', {
//     scope: ['profile', 'email'],
//   })
// );

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at google/callback
app.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'email', 'profile'],
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

// global error handler:
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Currently running on PORT ${PORT}`);
});

module.exports = app;
