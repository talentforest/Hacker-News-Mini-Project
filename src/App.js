import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AskDetailPage } from "./routes/AskDetailPage";
import { ThemeProvider } from './context/Provider';
import Home from "./routes/Home";
import Top from "./routes/Top";
import TopUsers from "./routes/TopUsers";
import New from "./routes/New";
import Job from "./routes/Job";
import Show from "./routes/Show";
import Ask from "./routes/Ask";
import UserProfile from "./routes/UserProfile";
import About from "./routes/About";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/job">
                <Job />
              </Route>
              <Route path="/ask/:id">
                <AskDetailPage />
              </Route>
              <Route path="/ask">
                <Ask />
              </Route>
              <Route path="/show">
                <Show />
              </Route>
              <Route path="/new">
                <New />
              </Route>
              <Route path="/top/users">
                <TopUsers />
              </Route>
              <Route path="/top">
                <Top />
              </Route>
              <Route path="/userprofile">
                <UserProfile />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
