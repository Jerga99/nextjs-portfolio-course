

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: String,
  slug: { type: String, unique: true, index: true},
  fullSlug: { type: String, unique: true, index: true},
  topic: { type: Schema.Types.ObjectId, ref: 'Topic'},
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  parent: { type: Schema.Types.ObjectId, ref: 'Post'},
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', postSchema);
