import Banner from "components/layout/Banner";
import TopTemplate from 'components/Top/TopTemplate';

export default function Top() {
  return (
    <>
      <Banner src={require("assets/top_banner.png")} />
      <TopTemplate />
    </>
  )
};
