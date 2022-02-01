import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { NewArticles } from "../ArticleComponents/NewArticles";

export default function New() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/new_banner.png" />
      <NewArticles />
    </>
  );
}
