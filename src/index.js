import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  backgroundColor: "#292C33",
  containerColor: "#343538",
  containerGrayColor: "#E2ECF0",
  headerColor: "#727272",
  headerHoverColor: "#fff",
  textColor: "#fff",
  svelteOrangeColor: "#ed702d;",
};
const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
  headerHoverColor: "#727272",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
