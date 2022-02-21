import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { TTopContainer } from "../HomeContainer/TTopContainer";
import { TNewContainer } from "../HomeContainer/TNewContainer";
import { TUserContainer } from "../HomeContainer/TUserContainer";
import { TShowContainer } from "../HomeContainer/TShowContainer";
import { TAskContainer } from "../HomeContainer/TAskContainer";
import { TJobContainer } from "../HomeContainer/TJobContainer";

export default function Home({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/home_banner.png" />
      <TTopContainer />
      <TNewContainer />
      <TUserContainer />
      <TShowContainer />
      <TAskContainer />
      <TJobContainer />
    </>
  );
}
