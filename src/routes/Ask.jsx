import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { AskPostContainer } from "../PostContainer/AskPostContainer";

export default function Ask({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/ask_banner.png" />
      <AskPostContainer />
    </>
  );
}
