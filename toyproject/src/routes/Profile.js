import styled from "styled-components";
import TweetList from "../components/TweetList";
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
  padding-left: 18px;
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
`;
const HlineTop = styled.div`
  border-bottom: thin solid black;
  width: 100%;
  padding-top: 20px;
`;
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
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
  return (
    <Wrapper>
      <HlineTop></HlineTop>
      <div style={{ padding: "80px" }}></div>
      <ProfileImage></ProfileImage>
      <Name>
        <h3>{userInfo?.nickname}</h3>
      </Name>
      <ProfileDetails>{userInfo?.id}</ProfileDetails>
      <ProfileDetails>{userInfo?.email}</ProfileDetails>
      <ProfileDetails>{userInfo?.createdDate}</ProfileDetails>
      <ProfileDetails>{userInfo?.bio}</ProfileDetails>
      <ProfileDetails>0 Follwing 0 Followers</ProfileDetails>
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
    </Wrapper>
  );
};
export default Profile;
