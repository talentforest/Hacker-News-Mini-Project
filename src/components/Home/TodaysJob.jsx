import { useState, useEffect } from "react";
import { getStory } from "util/hnApi";
import { changeUrlMark, maxChar } from "util";
import { Tag, Title, Site } from "theme/commonStyle";
import styled from "styled-components";
import TimeInfo from "components/common/TimeInfo";

const TodaysJob = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <JobWrapper>
      <Tag orange>Software Engineers</Tag>
      <Title>{maxChar(story.title, 75)}</Title>
      <a href={story?.url} target="_blank" rel="noopener noreferrer">
        <Site>{changeUrlMark(story.url)}</Site>
      </a>
      <Info>
        <TimeInfo story={story} />
      </Info>
    </JobWrapper>
  );
};

const JobWrapper = styled.div`
  flex: 0 0 auto;
  width: 220px;
  height: 174px;
  background-color: ${(props) => props.theme.container.lightBlue};
  padding: 16px 12px 0 12px;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
const Info = styled.div`
  padding: 18px 0 17px;
  display: flex;
  align-items: center;
  height: 41px;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
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
