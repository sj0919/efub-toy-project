import axios from "axios";
import styled from "styled-components";

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
export const PostTweet = () => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  async function postTweets(event) {
    event.preventDefault();
    const data = {
      writerAccountId: 1,
      title: "글1",
      content: document.querySelector("textarea").value,
    };
    try {
      const response = await axios.post(`${BASE_URL}posts`, data);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Form onSubmit={postTweets}>
        <TextArea
          id="txt"
          rows={3}
          maxLength={180}
          placeholder="글을 작성해주세요"
        />
        <SubmitBtn type="submit">POST</SubmitBtn>
      </Form>
    </div>
  );
};
export default PostTweet;
