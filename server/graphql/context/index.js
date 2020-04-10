
const passport = require('passport');

// options == {email, password}
const authenticateUser = (options) => {
  return new Promise((resolve, reject) => {
    console.log("Calling authenticateUser");

    const done = (err, user) => {
      // Here we will get user if user is authenticated
      // If we will get user we can save session to DB

      if (err) {
        return reject(new Error(err));
      }

      if (user) {
        return resolve(user);
      }
    }

    const authFn = passport.authenticate('graphql', options, done);
    authFn();
  })
}



exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options)
  }

  return auth;
}
