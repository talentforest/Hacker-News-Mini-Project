import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/Provider";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ScrollToTop from "util/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
