import styled from "styled-components";
import TweetList from "../components/TweetList";
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
  color: grey;
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
  return (
    <Wrapper>
      <HlineTop></HlineTop>
      <div style={{ padding: "80px" }}></div>
      <ProfileImage>
        <img src="https://www.ewha.ac.kr/_res/ewha/img/admission/img-admi01.gif"></img>
      </ProfileImage>
      <Name>
        <h3>이승진</h3>
      </Name>
      <ProfileDetails>@efub_4th_toy</ProfileDetails>
      <ProfileDetails>Joined March 2024</ProfileDetails>
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
