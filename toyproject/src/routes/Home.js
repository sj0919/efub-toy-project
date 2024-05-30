import styled from "styled-components";
import TweetList from "../components/TweetList";
import PostTweet from "../components/PostTweet";
import { useState, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  overflow-y: scroll;
`;
const MenuBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 250px;
  padding-left: 10px;
`;
const Button = styled.div`
  border-color: white;
  font-size: 14px;
  font-weight: bold;
`;
const Post = styled.div`
  border-width: 0 0 5px;
  border-style: solid;
  border-color: #1d9bf0;
  padding-bottom: 5px;
`;
const Hline = styled.div`
  border-bottom: thin solid black;
  width: 100%;
`;
const Home = () => {
  const [tweets, setTweets] = useState([]);
  const nextId = useRef(4);
  const user = "이승진";
  const onInsert = (text) => {
    const newTweet = {
      userName: user.current,
      id: nextId.current,
      text,
    };
    setTweets(tweets.concat(newTweet));
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setTweets(tweets.filter((tweets) => tweets.id !== id));
  };
  return (
    <Wrapper>
      <MenuBar>
        <Button>
          <Post>For you</Post>
        </Button>
        <Button>Following</Button>
      </MenuBar>
      <Hline></Hline>
      <PostTweet onInsert={onInsert} />
      <TweetList tweets={tweets} onRemove={onRemove} />
    </Wrapper>
  );
};
export default Home;

