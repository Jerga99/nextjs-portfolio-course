

const authenticateUser = ({email, password}) => {
  console.log(`Authenticating user: ${email}`);
  return true;
}



exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options)
  }

  return auth;
}
