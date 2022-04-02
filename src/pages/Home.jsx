import Banner from "components/layout/Banner";
import TodaysTopTemplate from 'components/Templates/TodaysTopTemplate';
import TodaysNewTemplate from 'components/Templates/TodaysNewTemplate';
import TodaysAskTemplate from 'components/Templates/TodaysAskTemplate';
import TodaysUserTemplate from 'components/Templates/TodaysUserTemplate';
import TodaysShowTemplate from 'components/Templates/TodaysShowTemplate';
import TodaysJobTemplate from 'components/Templates/TodaysJobTemplate';


export default function Home() {
  return (
    <>
      <Banner
        src={require("assets/home_banner.png")}
        alt="banner" />
      <TodaysTopTemplate />
      <TodaysNewTemplate />
      <TodaysAskTemplate />
      <TodaysUserTemplate />
      <TodaysShowTemplate />
      <TodaysJobTemplate />
    </>
  );
}
