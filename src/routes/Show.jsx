import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { ShowPostContainer } from "../ArticleComponents/ShowPostContainer";

export default function Show() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/show_banner.png" />
      <ShowPostContainer />
    </>
  );
}
