import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { ShowPostContainer } from "../ArticleComponents/ShowPostContainer";

export default function Show({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/show_banner.png" />
      <ShowPostContainer />
    </>
  );
}
