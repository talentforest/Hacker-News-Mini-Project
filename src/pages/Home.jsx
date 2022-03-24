import Banner from "../components/layout/Banner";
import TodaysTopContainer from '../components/Home/TodaysTopContainer';
import TodaysNewContainer from '../components/Home/TodaysNewContainer';
import TodaysAskContainer from '../components/Home/TodaysAskContainer';
import TodaysUserContainer from '../components/Home/TodaysUserContainer';
import TodaysShowContainer from '../components/Home/TodaysShowContainer';
import TodaysJobContainer from '../components/Home/TodaysJobContainer';

export default function Home() {
  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/home_banner.png" />
      <TodaysTopContainer />
      <TodaysNewContainer />
      <TodaysAskContainer />
      <TodaysUserContainer />
      <TodaysShowContainer />
      <TodaysJobContainer />
    </>
  );
}
