import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { ReloadTitle, ClockTitle, OnlyTitle } from "../components/TodayTitle";
import { TTopContainer } from "../container/TTopContainer";
import { TNewContainer } from "../container/TNewContainer";
import { TUserContainer } from "../container/TUserContainer";
import { TShowContainer } from "../container/TShowContainer";
import { TAskContainer } from "../container/TAskContainer";
import { TJobContainer } from "../container/TJobContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/home_banner.png" />

      <ClockTitle title="Today's Top" />
      <TTopContainer />

      <ReloadTitle title="Today's New" />
      <TNewContainer />

      <OnlyTitle title="Today's User" />
      <TUserContainer />

      <ReloadTitle title="Today's Show" />
      <TShowContainer />

      <ReloadTitle title="Today's Ask" />
      <TAskContainer />

      <OnlyTitle title="Today's Job" />
      <TJobContainer />
    </>
  );
}
