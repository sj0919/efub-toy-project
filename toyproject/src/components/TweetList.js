import React from "react";
import TweetDetail from "./TweetDetail";
import styled from "styled-components";
const Wrapper = styled.div`
  color: black;
  border-width: 1px;
`;
const TweetList = ({ tweets, onRemove }) => {
  return (
    <Wrapper>
      {tweets.map((tweets) => (
        <TweetDetail tweets={tweets} key={tweets.id} onRemove={onRemove} />
      ))}
    </Wrapper>
  );
};
export default TweetList;
