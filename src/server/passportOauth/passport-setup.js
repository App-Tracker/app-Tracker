const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  // done(null, user.id);  // uncomment when db is created
  done(null, user) // delete
});


// passport.session will take cookie and pass in deserializeUSer func, take id from cookie
// then find user in db, then select entire user object( entire user obj will be in req.user)
// passport.deserializeUser((id, done) {    // uncomment when db is created
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// delete when db is created
passport.deserializeUser((user, done) => {
  done(null, user);
})


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: "959437448424-at7lde35gs414lq0s7ru5h92l7jrap76.apps.googleusercontent.com",
    clientSecret: "pUGWncI1Trmf3JtTX8_wZr8n",
    callbackURL: "http://localhost:8080/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // use profile info (mainly profile id) to check if user is registered in db 
      //  User.findOrCreate({ googleId: profile.id }, (err, user)=> {
      //    return done(err, user);
      return done(null, profile) //delete & uncomment when db is created
       }));


module.exports = passport;

