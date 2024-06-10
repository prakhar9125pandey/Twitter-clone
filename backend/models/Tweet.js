const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tweet', TweetSchema);
