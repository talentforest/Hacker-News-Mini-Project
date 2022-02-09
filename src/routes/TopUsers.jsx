import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import TopToggleBtn from "../components/TopToggleBtn";
import { TopUsersBox } from "../ArticleComponents/TopUsersBox";

export default function TopUsers({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/top_banner.png" />
      <TopToggleBtn />
      <TopUsersBox />
    </>
  );
}
