import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getJobStory } from "../api/hnApi";

const Banner = styled.div`
  height: 151px;
  margin-right: 14px;
  padding: 2px;
  width: 351px;
  background-color: #fff;
  border-radius: 8px;
`;
const Banner2 = styled.div`
  display: flex;
  height: 82px;
  margin-right: 14px;
  padding-top: 2px;
  width: 351px;
  background-color: #fff;
  border-radius: 8px;
`;
const Tags = styled.div`
  width: 104px;
  height: 17px;
  background-color: #ed702d;
  color: #fff;
  font-size: 10px;
  padding: 4px 8px 2px;
  align-items: center;
  border-radius: 8px;
  margin: 10px 0 4px 12px;
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 52px;
    height: 52px;
  }
`;
const CompanyInfo2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-left: 12px;
  }
`;
const Company = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  padding-top: 3px;
  text-align: center;
`;
const Company2 = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  margin-left: 10px;
  padding-top: 6px;
  text-align: center;
`;
const Job = styled.span`
  /* border: 1px solid red; */
  padding: 0 15px;
  word-break: break-all;
  font-weight: 700;
  line-height: 20px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerBox = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getJobStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  const companyName = story.title?.split(")")[0];
  // console.log(companyName);

  const companyShortName = story.title?.split(" ")[0];
  // console.log(companyShortName);

  const job = story.title?.split("iring")[1];

  return (
    <Banner>
      <Tags>Software Engineers</Tags>
      <CompanyInfo>
        <img src="/assets/company_logo.png" alt="company logo" />
        <Company>
          {companyName?.length < 30 ? `${companyName})` : companyShortName}
        </Company>
        <Job>{job?.includes(", ") ? job.slice(2) : job}</Job>
      </CompanyInfo>
    </Banner>
  );
});

export const BannerBox2 = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getJobStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  const companyName = story.title?.split(")")[0];
  // console.log(companyName);

  const companyShortName = story.title?.split(" ")[0];
  // console.log(companyShortName);

  return (
    <Banner2>
      <CompanyInfo2>
        <img src="/assets/company_logo.png" alt="companylogo" />
        <Company2>
          {companyName?.length < 30 ? `${companyName})` : companyShortName}
        </Company2>
      </CompanyInfo2>
    </Banner2>
  );
}, []);
