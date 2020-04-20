

const slugify = require('slugify')
const uniqueSlug = require('unique-slug');
const BaseModel = require('./BaseModel');

class Topic extends BaseModel {

  async getRandoms(limit) {
    const query = await super.getRandoms(limit);
    return query().populate('user');
  }

  getBySlug(slug) {
    return this.Model.findOne({slug}).populate('user').populate('forumCategory');
  }

  getAllByCategory(forumCategory) {
    return this.Model
      .find({forumCategory})
      .populate('user')
      .populate('forumCategory');
  }

  async _create(data) {
    const createdTopic = await this.Model.create(data);
    return this.Model.findById(createdTopic._id).populate('user').populate('forumCategory');
  }

  async create(topicData) {
    if (!this.user) {
      throw new Error('You need to authenticate to create a topic!');
    }

    topicData.user = this.user;
    // generateSlug
    topicData.slug =  slugify(topicData.title, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: false,
    });

    let topic;
    try {
      topic = await this._create(topicData);
      return topic;
    } catch(e) {
      if (e.code === 11000 && e.keyPattern && e.keyPattern.slug) {
        topicData.slug += `-${uniqueSlug()}`
        topic = await this._create(topicData);
        return topic;
      }

      return null;
    }
  }
}

module.exports = Topic;
