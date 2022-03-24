import Banner from "../components/layout/Banner";
import TodaysTopContainer from "../HomeContainer/TodaysTopContainer";
import TodaysNewContainer from "../HomeContainer/TodaysNewContainer";
import TodaysUserContainer from "../HomeContainer/TodaysUserContainer";
import TodaysShowContainer from "../HomeContainer/TodaysShowContainer";
import TodaysAskContainer from "../HomeContainer/TodaysAskContainer";
import TodaysJobContainer from "../HomeContainer/TodaysJobContainer";

export default function Home() {
  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/home_banner.png" />
      <TodaysTopContainer />
      <TodaysNewContainer />
      <TodaysUserContainer />
      <TodaysShowContainer />
      <TodaysAskContainer />
      <TodaysJobContainer />
    </>
  );
}
