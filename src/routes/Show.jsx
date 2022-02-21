import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { ShowPostContainer } from "../PostContainer/ShowPostContainer";

export default function Show({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/show_banner.png" />
      <ShowPostContainer />
    </>
  );
}
