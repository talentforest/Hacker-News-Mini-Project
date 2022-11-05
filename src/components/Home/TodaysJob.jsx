import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { urlName, maxChar } from "util";
import { Tag, Title, Site } from "theme/commonStyle";
import styled from "styled-components";
import TimeInfo from "components/common/TimeInfo";

const TodaysJob = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Wrapper>
      <JobWrapper>
        <Tag orange>Software Engineers</Tag>
        <Title>{maxChar(story.title, 75)}</Title>
        <a href={story?.url} target="_blank" rel="noopener noreferrer">
          <Site>{urlName(story)}</Site>
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
  background-color: ${(props) => props.theme.container.gray};
  padding: 16px 12px 0 12px;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
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
