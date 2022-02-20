import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { SortViewModeBtn } from "../CommonComponents/SortBtn";
import { NewPostContainer } from "../PostContainer/NewPostContainer";

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
