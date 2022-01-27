import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Top from "./routes/Top";
import New from "./routes/New";
import Job from "./routes/Job";
import Show from "./routes/Show";
import Ask from "./routes/Ask";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/job">
            <Job />
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
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
