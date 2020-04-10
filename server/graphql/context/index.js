
const passport = require('passport');

// options == {email, password}
const authenticateUser = (options) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {

      if (error) {
        return reject(new Error(error));
      }

      // If we will get user we can save session to DB
      if (user) {
        return resolve(user);
      } else {
        return reject(new Error('Invalid password or email!'));
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
