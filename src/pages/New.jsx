import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import NewTemplate from 'components/New/NewTemplate';

export default function New() {
  return (
    <>
      <Banner
        src={require("assets/new_banner.png")}
        alt="Banner" />
      <ViewModeBtn />
      <NewTemplate />
    </>
  );
}
