import JobTemplate from 'components/Job/JobTemplate';
import Banner from "components/layout/Banner";

export default function Job() {

  return (
    <>
      <Banner
        src={require("assets/job_banner.png")}
        alt="job banner" />
      <JobTemplate />
    </>
  )
}
