import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { AskPostContainer } from "../PostContainer/AskPostContainer";

export default function Ask({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/ask_banner.png" />
      <AskPostContainer />
    </>
  );
}
