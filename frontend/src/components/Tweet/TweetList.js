import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from the backend
    const fetchTweets = async () => {
      const fetchedTweets = [
        { id: 1, content: "Breaking: Major development in the upcoming election! Key candidates share their platforms. #politics #election", user: { username: 'user1', avatar: 'https://via.placeholder.com/50' }, date: '2024-06-10' },
        { id: 2, content: "Exciting game last night! The local team clinched a dramatic victory in the final minutes. #sports #victory", user: { username: 'user2', avatar: 'https://via.placeholder.com/50' }, date: '2024-06-09' },
        { id: 3, content: "Exciting game last night! The local team clinched a dramatic victory in the final minutes. #sports #victory", user: { username: 'user3', avatar: 'https://via.placeholder.com/50' }, date: '2024-06-09' },
        // Add more tweets as needed
      ];
      setTweets(fetchedTweets);
    };

    fetchTweets();
  }, []);

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
