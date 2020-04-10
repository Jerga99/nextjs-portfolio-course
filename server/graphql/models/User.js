


class User {
  constructor(model) {
    this.Model = model;
  }

  signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('Password must be the same as confirmation password!');
    }

    return this.Model.create(signUpData);
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      console.log(user);
      return `User: ${user.username}`;
    } catch(error) {
      return error;
    }
  }

  signOut() {
    return 'Signing Out...';
  }
}

module.exports = User;
