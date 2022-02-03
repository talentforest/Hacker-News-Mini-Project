import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { ReloadTitle, ClockTitle, OnlyTitle } from "../components/TodayTitle";
import { TTopContainer } from "../homeContainer/TTopContainer";
import { TNewContainer } from "../homeContainer/TNewContainer";
import { TUserContainer } from "../homeContainer/TUserContainer";
import { TShowContainer } from "../homeContainer/TShowContainer";
import { TAskContainer } from "../homeContainer/TAskContainer";
import { TJobContainer } from "../homeContainer/TJobContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/home_banner.png" />

      <TTopContainer />
      <TNewContainer />
      <TUserContainer />
      <TShowContainer />
      <TAskContainer />
      <TJobContainer />
    </>
  );
}
