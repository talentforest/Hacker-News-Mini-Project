import Banner from "components/layout/Banner";
import AskTemplate from 'components/Templates/AskTemplate';

export default function Ask() {
  return (
    <>
      <Banner
        src={require("assets/ask_banner.png")}
        alt="banner" />
      <AskTemplate />
    </>
  );
}


