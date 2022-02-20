import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
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
  commentColor: "#3f3f3f",
  headerColor: "#ee702c#",
  headerHoverColor: "#727272",
  textColor: "black",
  textGrayColor: "#202020",
  svelteOrangeColor: "#ed702d;",
  userRankOddBoxColor: "#fff",
};
const Globalstyle = createGlobalStyle`
/* reset.css
http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 
License: none (public domain) */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  background-color: #e5e5e5;
}
a {
  text-decoration: none;
  color: #727272;
}
.swiper-pagination-bullet { // 페이지 불렛
  background: gray;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  opacity: 1;
}
.swiper-pagination-bullet-active { // 활성화된 페이지 불렛
  background-color: #ED702D;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.swiper-pagination { // 페이지 번호 표시
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8px;
  margin: 52px 0 72px
}
.swiper-pagination-current,
.swiper-pagination-total {  // 현재, 전체 페이지 표시
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px; 
}
.swiper-pagination-fraction { // 페이지 번호 표시 컨테이너
  background-color: #fff;
  width: 71px;
  height: 30px;
  border-radius: 20px;
  padding-top: 3px;
  margin-left: calc( (100vw - 71px) / 2);
}
.swiper-button-next,
.swiper-button-prev { // 이전, 이후 페이지 화살표 버튼
  position: absolute;
  top: calc((100% - 90px));
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  padding: 6px 0;
  margin-right: 94px;
}
.swiper-button-prev {
  margin-left:94px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  padding: 10px;
  font-weight: bold;
  font-size: 12px
}
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider
        toggleDark={toggleDark}
        theme={isDark ? darkTheme : lightTheme}
      >
        <Globalstyle />
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
