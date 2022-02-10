import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import TopToggleBtn from "../CommonComponents/TopToggleBtn";
import { TopPostContainer } from "../PostContainer/TopPostContainer";

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
