import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100%;
  width: 100%;
  padding: 10px;
  font-family: sans-serif;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 90px;
`;
const Menu2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  padding-right: 90px;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    margin-left: 10px;
    width: 25px;
    fill: white;
    color: black;
  }
`;
const Vline = styled.div`
  border-right: thin solid black;
  height: 100%;
  padding-right: 50px;
`;
const Vline2 = styled.div`
  border-left: thin solid black;
  height: 100%;
`;
const MenuItem2 = styled.div`
  border: 1px solid black;
  width: 200px;
  font-size: 14px;
  padding: 9px;
  display: column;
  align-items: center;
  font-weight: bold;
`;
const Search = styled.div`
  svg {
    width: 12px;
    fill: white;
    color: black;
  }
`;
const MightLike = styled.div`
  svg {
    width: 20px;
  }
  button {
    font-size: 10px;
    height: 19px;
  }
  display: grid;
  grid-template-columns: 2fr 8fr 3fr;
  padding-top: 7px;
`;
const Trends = styled.div`
  font-size: 13px;
  padding-top: 18px;
  div {
    font-size: 10px;
    color: grey;
  }
`;
const Layout = () => {
  return (
    <Wrapper>
      <div style={{ marginLeft: "60px" }}>
        <Vline>
          <Menu>
            <MenuList>
              <Link to="/">
                <MenuItem>
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
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </MenuItem>
              </Link>
              Home
            </MenuList>
            <MenuList>
              <MenuItem>
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </MenuItem>
              Explore
            </MenuList>
            <MenuList>
              <MenuItem>
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </MenuItem>
              Notifications
            </MenuList>
            <MenuList>
              <MenuItem>
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </MenuItem>
              Messages
            </MenuList>
            <MenuList>
              <MenuItem>
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </MenuItem>
              Lists
            </MenuList>
            <MenuList>
              <MenuItem>
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
              </MenuItem>
              Bookmarks
            </MenuList>
            <MenuList>
              <Link to="/profile">
                <MenuItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </MenuItem>
              </Link>
              Profile
            </MenuList>
          </Menu>
          <Menu>
            <div
              style={{
                fontSize: "15px",
                backgroundColor: " #1d9bf0",
                marginTop: "20px",
                textAlign: "center",
                padding: "5px",
                width: "120%",
                color: "white",
              }}
            >
              Post
            </div>
          </Menu>
        </Vline>
      </div>
      <Outlet />
      <div style={{ paddingRight: "90px" }}>
        <Vline2>
          <Menu2>
            <MenuItem2>
              <Search>
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Search
              </Search>
            </MenuItem2>
            <MenuItem2>
              You might like
              <MightLike>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                서울시
                <button>Follow</button>
              </MightLike>
              <MightLike>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                르세라핌
                <button>Follow</button>
              </MightLike>
            </MenuItem2>
            <MenuItem2>
              Trends for you
              <Trends>
                <div>Music.Trending</div>
                라이즈
                <div>12.7k posts</div>
              </Trends>
              <Trends>
                <div>Music.Trending</div>
                아이브
                <div>1k posts</div>
              </Trends>
              <Trends>
                <div>Music.Trending</div>
                방탄소년단
                <div>2k posts</div>
              </Trends>
            </MenuItem2>
          </Menu2>
        </Vline2>
      </div>
    </Wrapper>
  );
};
export default Layout;
