const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  disaster: String,
  location: String,
  date: String,
  time: String,
  childCount: Number,
  femaleCount: Number,
  maleCount: Number,
  food: Number,
  sanitization: Number,
  cloth: Number,
  medical: Number
});
const PostModel = mongoose.model('post', PostSchema);
module.exports = PostModel;
