import Banner from "../components/common/Banner";
import { ShowPostContainer } from "../PostContainer/ShowPostContainer";

export default function Show({ toggleDark }) {
  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/show_banner.png" />
      <ShowPostContainer />
    </>
  );
}
