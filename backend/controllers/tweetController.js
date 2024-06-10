const Tweet = require('../models/Tweet');

exports.createTweet = async (req, res) => {
  const { content } = req.body;
  try {
    const tweet = await Tweet.create({ user: req.user.id, content });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet || tweet.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Tweet not found' });
    }
    await tweet.remove();
    res.json({ message: 'Tweet removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find({ user: { $in: req.user.following } }).populate('user', 'username').sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
