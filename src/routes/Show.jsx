import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { ShowPostContainer } from "../PostContainer/ShowPostContainer";

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
