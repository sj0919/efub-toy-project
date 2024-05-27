import styled from "styled-components";
import { useState } from "react";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  border: 2px solid black;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: black;
  background-color: white;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9df0;
  }
`;
const SubmitBtn = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;
const PostTweet = ({ onInsert }) => {
  const [tweets, setTweets] = useState("");
  const onChange = (e) => {
    setTweets(e.target.value);
  };
  const onSubmit = (e) => {
    onInsert(tweets);
    setTweets("");
    e.preventDefault();
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        rows={3}
        maxLength={180}
        value={tweets}
        onChange={onChange}
        placeholder="글을 작성해주세요"
      />
      <SubmitBtn type="submit">POST</SubmitBtn>
    </Form>
  );
};
export default PostTweet;
