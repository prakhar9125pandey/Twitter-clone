const User = require('../models/User');

exports.followUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const userToFollow = await User.findById(req.params.id);
    if (!user || !userToFollow) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.following.includes(userToFollow._id)) {
      return res.status(400).json({ message: 'Already following this user' });
    }
    user.following.push(userToFollow._id);
    userToFollow.followers.push(user._id);
    await user.save();
    await userToFollow.save();
    res.json({ message: 'User followed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const userToUnfollow = await User.findById(req.params.id);
    if (!user || !userToUnfollow) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!user.following.includes(userToUnfollow._id)) {
      return res.status(400).json({ message: 'Not following this user' });
    }
    user.following.pull(userToUnfollow._id);
    userToUnfollow.followers.pull(user._id);
    await user.save();
    await userToUnfollow.save();
    res.json({ message: 'User unfollowed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
