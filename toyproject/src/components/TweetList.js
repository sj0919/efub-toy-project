import React from "react";
import TweetDetail from "./TweetDetail";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
const Wrapper = styled.div`
  color: black;
  border-width: 1px;
`;
const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 30%;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
const TweetList = () => {
  const [tweetList, setTweetList] = useState({ posts: [] });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
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

  const deleteTweet = async (postId, accountId) => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    try {
      const response = await axios.delete(
        `${BASE_URL}posts/${postId}?accountId=${accountId}`
      );
      console.log(response.data);
      setTweetList((prevState) => ({
        ...prevState,
        posts: prevState.posts.filter((post) => post.postId !== postId),
      }));
      setShowModal(false);
      setSelectedPost(null);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };
  const handleConfirmDelete = () => {
    if (selectedPost) {
      deleteTweet(selectedPost.postId, 1);
    }
  };
  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedPost(null);
  };
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
            onRemove={() => handleDeleteClick(tweets)}
          />
        ))
      ) : (
        <div>No tweets available</div>
      )}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Delete Post?</h3>
            <p>
              This can't be undone and it will be removed from your profile, the
              timeine of any accounts that follow you, and from search results
            </p>
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
            <Button onClick={handleCancelDelete}>Cancel</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};
export default TweetList;
