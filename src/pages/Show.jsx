import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import ShowTemplate from 'components/Templates/ShowTemplate';

export default function Show() {
  return (
    <>
      <Banner
        src={require("assets/show_banner.png")}
        alt="show banner" />
      <ViewModeBtn />
      <ShowTemplate />
    </>
  );
}

