import { ThemeProvider } from './context/Provider';
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header"
import Gnb from './components/layout/Gnb';
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import Top from "./pages/Top";
import TopUsers from "./pages/TopUsers";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import AskDetails from "./pages/AskDetails";
import Job from "./pages/Job";


function App() {
  return (
    <ThemeProvider>
      <Header />
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="top" element={<Top />} />
        <Route path="top/users" element={<TopUsers />} />
        <Route path="new" element={<New />} />
        <Route path="show" element={<Show />} />
        <Route path="ask" element={<Ask />} />
        <Route path="ask/:id" element={<AskDetails />} />
        <Route path="userprofile/:id" element={<UserProfile />} />
        <Route path="job" element={<Job />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
