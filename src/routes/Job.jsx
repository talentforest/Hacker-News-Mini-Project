import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { JobPostContainer } from "../PostContainer/JobPostContainer";

export default function Job({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/job_banner.png" />
      <JobPostContainer />
    </>
  );
}
