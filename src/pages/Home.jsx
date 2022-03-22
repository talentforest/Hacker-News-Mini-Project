import Banner from "../components/layout/Banner";
import { TTopContainer } from "../HomeContainer/TTopContainer";
import { TNewContainer } from "../HomeContainer/TNewContainer";
import { TUserContainer } from "../HomeContainer/TUserContainer";
import { TShowContainer } from "../HomeContainer/TShowContainer";
import { TAskContainer } from "../HomeContainer/TAskContainer";
import { TJobContainer } from "../HomeContainer/TJobContainer";

export default function Home() {
  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/home_banner.png" />
      <TTopContainer />
      <TNewContainer />
      <TUserContainer />
      <TShowContainer />
      <TAskContainer />
      <TJobContainer />
    </>
  );
}
