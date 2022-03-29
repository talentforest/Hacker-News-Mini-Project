import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi"
import styled from "styled-components";
import TimeInfo from 'components/common/TimeInfo';

const TodaysJob = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  const urlName = story.url?.slice(8).split("/")[0];

  return (
    <Wrapper>
      <JobWrapper>
        <Tag>Software Engineers</Tag>
        <Title>
          {story?.title?.length > 75
            ? `${story?.title?.slice(0, 75)}...`
            : story?.title}
        </Title>
        <a href={story?.url} target="_blank" rel="noopener noreferrer">
          <Site>{urlName?.includes("www") ? urlName?.slice(4) : urlName}</Site>
        </a>
        <Info>
          <TimeInfo story={story} />
        </Info>
      </JobWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 2000px;
`;

const JobWrapper = styled.div`
  width: 220px;
  height: 174px;
  background-color: ${(props) => props.theme.containerGrayColor};
  padding: 16px 12px 0 12px;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`;
const Tag = styled.div`
  width: 104px;
  height: 20px;
  padding: 5px 7px;
  background-color: #ed702d;
  font-size: 10px;
  color: #f5f5f5;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  height: 60px;
  padding-top: 6px;
`;
const Site = styled.span`
  display: block;
  width: 60px;
  height: 32px;
  padding: 12px 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: #727272;
  text-decoration: underline;
  cursor: pointer;
`;
const Info = styled.div`
  padding: 18px 0 17px;
  display: flex;
  align-items: center;
  height: 41px;
  font-size: 12px;
  color: #727272;
  span {
    display: block;
    padding-top: 4px;
    font-weight: 400;
  }
  img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

export default TodaysJob;
