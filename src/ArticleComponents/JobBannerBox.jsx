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
  font-weight: 700;
  height: 27px;
  display: flex;
  align-items: center;
  width: 300px;
`;

export const BannerBox = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getJobStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);
  return (
    <Banner>
      <Tags>Software Engineers</Tags>
      <CompanyInfo>
        <img src="img/company_logo.png" alt="company logo" />
        <Company>{story.by}</Company>
        <Job>{story.title}</Job>
      </CompanyInfo>
    </Banner>
  );
});

export const BannerBox2 = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getJobStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);
  return (
    <Banner2>
      <CompanyInfo2>
        <img src="/assets/company_logo.png" alt="company logo" />
        <Company2>{story.by}</Company2>
      </CompanyInfo2>
    </Banner2>
  );
});
