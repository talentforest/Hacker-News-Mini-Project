import Banner from "components/layout/Banner";
import TodaysTopContainer from 'components/Home/Templates/TodaysTopContainer';
import TodaysNewContainer from 'components/Home/Templates/TodaysNewContainer';
import TodaysAskContainer from 'components/Home/Templates/TodaysAskContainer';
import TodaysUserContainer from 'components/Home/Templates/TodaysUserContainer';
import TodaysShowContainer from 'components/Home/Templates/TodaysShowContainer';
import TodaysJobContainer from 'components/Home/Templates/TodaysJobContainer';


export default function Home() {
  return (
    <>
      <Banner
        src={require("assets/home_banner.png")}
        alt="banner" />
      <TodaysTopContainer />
      <TodaysNewContainer />
      <TodaysAskContainer />
      <TodaysUserContainer />
      <TodaysShowContainer />
      <TodaysJobContainer />
    </>
  );
}
