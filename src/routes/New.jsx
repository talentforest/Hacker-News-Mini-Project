import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { NewPostContainer } from "../ArticleComponents/NewPostContainer";

export default function New({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/new_banner.png" />
      <NewPostContainer />
    </>
  );
}
