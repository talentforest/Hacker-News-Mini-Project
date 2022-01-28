import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { StoryContainer } from "../container/storyContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/home_banner.png" />
      <StoryContainer />
    </>
  );
}
