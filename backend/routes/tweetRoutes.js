const express = require('express');
const { createTweet, deleteTweet, getTweets } = require('../controllers/tweetController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createTweet).get(protect, getTweets);
router.route('/:id').delete(protect, deleteTweet);

module.exports = router;
