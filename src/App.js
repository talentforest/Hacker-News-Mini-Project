import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Gnb from "./layout/Gnb";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import Top from "./pages/Top";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Details from "./pages/Details";
import Job from "./pages/Job";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top" element={<Top />} />
        <Route path="top/:id" element={<Details />} />
        <Route path="new" element={<New />} />
        <Route path="new/:id" element={<Details />} />
        <Route path="show" element={<Show />} />
        <Route path="show/:id" element={<Details />} />
        <Route path="ask" element={<Ask />} />
        <Route path="ask/:id" element={<Details />} />
        <Route path="job" element={<Job />} />
        <Route path="userprofile/:id" element={<UserProfile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.background.default};
  a {
    color: ${(props) => props.theme.text.lightGray};
  }
`;

export default App;
