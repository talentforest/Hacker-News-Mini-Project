import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { JobPostContainer } from "../ArticleComponents/JobPostContainer";

export default function Job({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/job_banner.png" />
      <JobPostContainer />
    </>
  );
}
