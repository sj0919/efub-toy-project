import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import DetailScreen from "./components/DetailScreen";
import LoadingScreen from "./components/LoadingScreen";

const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
`;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { postId } = useParams();
  const init = async () => {
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <GlobalStyles>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="posts/:postId" element={<DetailScreen />}></Route>
          </Route>
        </Routes>
      )}
    </GlobalStyles>
  );
}

export default App;

