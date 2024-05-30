import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileImage = styled.label`
  margin-left: 20px;
  width: 80px;
  overflow: hidden;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;
const ProfileDetails = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  color: black;
  margin-bottom: 10px;
  padding-left: 20px;
`;
const Name = styled.span`
  font-weight: bold;
  padding-left: 18px;
  margin-bottom: 0px;
  font-size: 22px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 76px;
  padding-top: 10px;
  padding-left: 35px;
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
  margin-top: 3px;
  margin-bottom: 3px;
`;
const HlineTop = styled.div`
  border-bottom: thin solid black;
  width: 100%;
  padding-top: 20px;
`;
const Text = styled.div`
  color: black;
  a {
    text-decoration: none;
  }
  #text {
    font-weight: bold;
  }
`;
const Svg = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: gray;
`;
const PostMenu = styled.div`
  padding: 15px;
  svg {
    width: 20px;
  }
`;
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [myTweet, setMyTweet] = useState(null);
  const [loading, setLoading] = useState(true);
  const accountId = "1";
  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    async function getUserInfo() {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}accounts/1`);
        setUserInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUserInfo();
  }, []);
  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    const getMyTweets = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}accounts/${accountId}/posts`
        );
        console.log(response.data);
        setMyTweet(response.data.accountPostList);
      } catch (error) {
        console.error(error);
      }
    };
    getMyTweets();
  }, []);
  return (
    <Wrapper>
      <HlineTop></HlineTop>
      <div style={{ padding: "50px" }}></div>
      <ProfileImage></ProfileImage>
      <Name>{userInfo?.nickname}</Name>
      <ProfileDetails>{userInfo?.id}</ProfileDetails>
      <ProfileDetails>{userInfo?.email}</ProfileDetails>
      <ProfileDetails>Joined {userInfo?.createdDate}</ProfileDetails>
      <ProfileDetails>{userInfo?.bio}</ProfileDetails>
      <ProfileDetails>140 Follwing 200 Followers</ProfileDetails>
      <MenuBar>
        <Button>
          <Post>Posts</Post>
        </Button>
        <Button>Replies</Button>
        <Button>Highlights</Button>
        <Button>Articles</Button>
        <Button>Media</Button>
        <Button>Likes</Button>
      </MenuBar>
      <Hline></Hline>
      <div>
        {Array.isArray(myTweet) && myTweet.length > 0 ? (
          myTweet.map((tweet) => (
            <div key={tweet.postId}>
              <PostMenu>
                <Text>
                  <div id="name">{tweet.writerNickname}</div>
                  <div id="text">{tweet.content}</div>
                </Text>
                <Svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </Svg>
              </PostMenu>
              <Hline></Hline>
            </div>
          ))
        ) : (
          <div>No tweets available</div>
        )}
      </div>
    </Wrapper>
  );
};
export default Profile;

