import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { AskPostContainer } from "../ArticleComponents/AskPostContainer";

export default function Ask() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/ask_banner.png" />
      <AskPostContainer />
    </>
  );
}
