import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { JobArticles } from "../ArticleComponents/JobArticles";

export default function Job() {
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/job_banner.png" />
      <JobArticles />
    </>
  );
}
