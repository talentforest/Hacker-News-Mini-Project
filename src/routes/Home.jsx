import styled from "styled-components";

import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/home_banner.png" />
    </>
  );
}
