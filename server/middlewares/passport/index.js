


const GraphqlStrategy = require('./strategies');
const User = require('../../database/models/user');


exports.init = (passport) => {
  passport.use('graphql', new GraphqlStrategy(({email}, done) => {
    User.findOne({email}, (error, user) => {
      if (error) { return done(error); }
      if (!user) { return done(null, false); }

      // TODO: Check user password if its maching password from options
      return done(null, user);
    })
  }));
}
