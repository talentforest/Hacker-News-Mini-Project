import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import TopToggleBtn from "../components/TopToggleBtn";
import { PostArea } from "../ArticleComponents/PostArea";
import { UsersArea } from "../ArticleComponents/UsersArea";

export default function Top() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/top_banner.png" />
      <TopToggleBtn />
      <PostArea />
      <UsersArea />
    </>
  );
}
