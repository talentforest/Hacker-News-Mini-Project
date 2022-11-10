import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { Tag } from "components/organisms/home/TodaysShowPost";
import styled from "styled-components";

const BigBanner = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => setStory();
  }, [storyId]);

  const companyName = story?.title?.split(")")[0];
  const companyShortName = story?.title?.split(" ")[0];
  const job = story?.title?.split("iring")[1];

  return (
    <Banner>
      <Tag orange>Software Engineers</Tag>
      <CompanyInfo>
        <img src={require("assets/company_logo.png")} alt="company logo" />
        <Company>
          {companyName?.length < 30 ? `${companyName})` : companyShortName}
        </Company>
        <Job>{job?.includes(", ") ? job.slice(2) : job}</Job>
      </CompanyInfo>
    </Banner>
  );
};

const Banner = styled.div`
  width: 90%;
  height: 160px;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.container.default};
  border-radius: 8px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text.default};
  img {
    width: 52px;
    height: 52px;
    margin-bottom: 3px;
  }
`;

const Company = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  padding-top: 3px;
  text-align: center;
`;

const Job = styled.span`
  width: 100%;
  height: 30px;
  text-align: center;
  margin: 0px 20px 0;
  word-break: break-word;
  font-weight: 700;
  line-height: 20px;
`;

export default BigBanner;
