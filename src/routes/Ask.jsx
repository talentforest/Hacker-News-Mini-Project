import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { AskArticles } from "../ArticleComponents/AskArticles";

export default function Ask() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/ask_banner.png" />
      <AskArticles />
    </>
  );
}
