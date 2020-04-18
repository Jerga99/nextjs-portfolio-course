

const uniqueSlug = require('unique-slug');

class Post {

  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }

  getAllByTopic(topic) {
    return this.Model
      .find({topic})
      .populate('topic')
      .populate('user')
      .populate({path: 'parent', populate: 'user'})
  }

}

module.exports = Post;
