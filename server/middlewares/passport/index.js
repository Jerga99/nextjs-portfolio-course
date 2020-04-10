


const GraphqlStrategy = require('./strategies');


exports.init = (passport) => {

  passport.use('graphql', new GraphqlStrategy((options, done) => {
    console.log('Calling verify function of strategy');
    // 1. Find user in DB and if user exists verify user password
    // If user is verified call "done"

    if (true) {
      // first param of done is reserved for "error", second one for "user"
      done();
    }
  }));
}
