import Banner from "components/layout/Banner";
import ViewModeBtn from "components/common/ViewModeBtn";
import NewTemplate from 'components/Templates/NewTemplate';

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
