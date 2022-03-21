import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AskDetailPage } from "./routes/AskDetailPage";
import Home from "./routes/Home";
import Top from "./routes/Top";
import TopUsers from "./routes/TopUsers";
import New from "./routes/New";
import Job from "./routes/Job";
import Show from "./routes/Show";
import Ask from "./routes/Ask";
import UserProfile from "./routes/UserProfile";
import About from "./routes/About";

const darkTheme = {
  backgroundColor: "#292C33",
  backgroundLightGrayColor: "#292C33",
  backgroundGrayColor: "#292C33",
  headerBackgroundColor: "#292C33",
  containerColor: "#343538",
  commentContainerColor: "#343538",
  commentColor: "#fff",
  toggleBtnTextColor: "#fff",
  containerGrayColor: "#E2ECF0",
  headerColor: "#727272",
  headerHoverColor: "#fff",
  textColor: "#fff",
  textGrayColor: "#fff",
  svelteOrangeColor: "#ed702d;",
  userRankOddBoxColor: "#343538",
};
const lightTheme = {
  backgroundColor: "white",
  backgroundLightGrayColor: "#efefef",
  backgroundGrayColor: "#F5F5F5",
  headerBackgroundColor: "#ee702c",
  containerColor: "#fff",
  containerGrayColor: "#fff",
  commentContainerColor: "#efefef",
  toggleBtnTextColor: "b7b7b7",
  commentColor: "#3f3f3f",
  headerColor: "#ee702c#",
  headerHoverColor: "#727272",
  textColor: "black",
  textGrayColor: "#202020",
  svelteOrangeColor: "#ed702d;",
  userRankOddBoxColor: "#fff",
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider
        toggleDark={toggleDark}
        theme={isDark ? darkTheme : lightTheme}
      >
        <div className="App">
          <Router>
            <Switch>
              <Route path="/job">
                <Job toggleDark={toggleDark} />
              </Route>
              <Route path="/ask/:id">
                <AskDetailPage toggleDark={toggleDark} />
              </Route>
              <Route path="/ask">
                <Ask toggleDark={toggleDark} />
              </Route>
              <Route path="/show">
                <Show toggleDark={toggleDark} />
              </Route>
              <Route path="/new">
                <New toggleDark={toggleDark} />
              </Route>
              <Route path="/top/users">
                <TopUsers toggleDark={toggleDark} />
              </Route>
              <Route path="/top">
                <Top toggleDark={toggleDark} />
              </Route>
              <Route path="/userprofile">
                <UserProfile toggleDark={toggleDark} />
              </Route>
              <Route path="/about">
                <About toggleDark={toggleDark} />
              </Route>
              <Route path="/">
                <Home toggleDark={toggleDark} />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
