import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import styled from "styled-components";

const JobBannerSmall = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  const companyName = story.title?.split(")")[0];
  const companyShortName = story.title?.split(" ")[0];

  return (
    <Banner2>
      <CompanyInfo2>
        <img src={require("assets/company_logo.png")} alt="companylogo" />
        <Company2>
          {companyName?.length < 30 ? `${companyName})` : companyShortName}
        </Company2>
      </CompanyInfo2>
    </Banner2>
  );
});

const Banner2 = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 82px;
  padding-top: 2px;
  background-color: ${(props) => props.theme.container.default};
  border-radius: 8px;
`;
const CompanyInfo2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.text.default};
  img {
    width: 40px;
    height: 40px;
    margin-left: 12px;
  }
`;
const Company2 = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  margin-left: 10px;
  padding-top: 6px;
  text-align: center;
`;

export default JobBannerSmall;
