import Banner from "components/layout/Banner";
import TodaysTopContainer from 'components/Home/Templates/TodaysTopTemplate';
import TodaysNewContainer from 'components/Home/Templates/TodaysNewTemplate';
import TodaysAskContainer from 'components/Home/Templates/TodaysAskTemplate';
import TodaysUserContainer from 'components/Home/Templates/TodaysUserTemplate';
import TodaysShowContainer from 'components/Home/Templates/TodaysShowTemplate';
import TodaysJobContainer from 'components/Home/Templates/TodaysJobTemplate';


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
