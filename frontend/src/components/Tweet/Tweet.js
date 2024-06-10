import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <p><strong>{tweet.user.username}</strong>: {tweet.content}</p>
    </div>
  );
};

export default Tweet;
