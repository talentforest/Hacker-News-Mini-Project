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
        <Route path="/Hacker-News-Mini-Project" element={<Home />} />
        <Route path="/Hacker-News-Mini-Project/about" element={<About />} />
        <Route path="/Hacker-News-Mini-Project/top" element={<Top />} />
        <Route path="/Hacker-News-Mini-Project/top/users" element={<TopUsers />} />
        <Route path="/Hacker-News-Mini-Project/new" element={<New />} />
        <Route path="/Hacker-News-Mini-Project/show" element={<Show />} />
        <Route path="/Hacker-News-Mini-Project/ask" element={<Ask />} />
        <Route path="/Hacker-News-Mini-Project/ask/:id" element={<AskDetails />} />
        <Route path="/Hacker-News-Mini-Project/userprofile/:id" element={<UserProfile />} />
        <Route path="/Hacker-News-Mini-Project/job" element={<Job />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
