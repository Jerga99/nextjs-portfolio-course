
const passport = require('passport');

// options == {email, password}
const authenticateUser = (req, options) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {

      if (error) {
        return reject(new Error(error));
      }

      if (user) {
        // If we will get user we can save session to DB
        req.helloWorld();
        return resolve(user);
      } else {
        return reject(new Error('Invalid password or email!'));
      }
    }

    const authFn = passport.authenticate('graphql', options, done);
    authFn();
  })
}



exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options)
  }

  return auth;
}
