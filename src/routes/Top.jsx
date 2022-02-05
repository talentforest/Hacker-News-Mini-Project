import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import TopToggleBtn from "../components/TopToggleBtn";
import { TopPostContainer } from "../ArticleComponents/TopPostContainer";

export default function Top({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/top_banner.png" />
      <TopToggleBtn />
      <TopPostContainer />
    </>
  );
}
