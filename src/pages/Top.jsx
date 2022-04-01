import Banner from "components/layout/Banner";
import ViewModeBtn from 'components/common/ViewModeBtn';
import TopTemplate from 'components/Templates/TopTemplate';

export default function Top() {
  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <ViewModeBtn />
      <TopTemplate />
    </>
  )
};
