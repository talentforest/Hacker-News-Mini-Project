import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import TopToggleBtn from "../CommonComponents/TopToggleBtn";
import { TopUsersBox } from "../PostComponents/TopUsersBox";

export default function TopUsers({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/top_banner.png" />
      <TopToggleBtn />
      <TopUsersBox />
    </>
  );
}
