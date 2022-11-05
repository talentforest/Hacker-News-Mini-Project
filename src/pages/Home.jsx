import TodaysTopTemplate from "components/Templates/Home/TodaysTopTemplate";
import TodaysNewTemplate from "components/Templates/Home/TodaysNewTemplate";
import TodaysAskTemplate from "components/Templates/Home/TodaysAskTemplate";
import TodaysUserTemplate from "components/Templates/Home/TodaysUserTemplate";
import TodaysShowTemplate from "components/Templates/Home/TodaysShowTemplate";
import TodaysJobTemplate from "components/Templates/Home/TodaysJobTemplate";

const Home = () => {
  return (
    <>
      <img src={require("assets/home_banner.png")} alt="banner" />
      <TodaysTopTemplate />
      <TodaysNewTemplate />
      <TodaysAskTemplate />
      <TodaysUserTemplate />
      <TodaysShowTemplate />
      <TodaysJobTemplate />
    </>
  );
};

export default Home;
