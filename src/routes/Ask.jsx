import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { AskPostContainer } from "../ArticleComponents/AskPostContainer";

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
