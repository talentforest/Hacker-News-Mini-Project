import Banner from "../components/layout/Banner";
import { NewPostContainer } from "../PostContainer/NewPostContainer";

export default function New() {
  return (
    <>
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/new_banner.png" />
      <NewPostContainer />
    </>
  );
}
