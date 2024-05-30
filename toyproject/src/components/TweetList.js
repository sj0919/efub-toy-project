import React from "react";
import TweetDetail from "./TweetDetail";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
const Wrapper = styled.div`
  color: black;
  border-width: 1px;
`;
const TweetList = () => {
  const [tweetList, setTweetList] = useState({ posts: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    async function getTweetList() {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}posts`);
        setTweetList(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getTweetList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const posts = tweetList.posts;
  return (
    <Wrapper>
      {posts && posts.length > 0 ? (
        posts.map((tweets) => (
          <TweetDetail
            key={tweets.postId}
            tweets={{
              id: tweets.postId,
              userName: tweets.writerNickname,
              text: tweets.content,
            }}
          />
        ))
      ) : (
        <div>No tweets available</div>
      )}
    </Wrapper>
  );
};
export default TweetList;
