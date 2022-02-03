import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import TopToggleBtn from "../components/TopToggleBtn";
import { PostContainer } from "../ArticleComponents/TopPostContainer";

export default function Top({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="img/top_banner.png" />
      <TopToggleBtn />
      <PostContainer />
    </>
  );
}
