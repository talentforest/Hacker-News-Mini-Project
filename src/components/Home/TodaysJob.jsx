import { useState, useEffect } from "react";
import { getStory } from "util/hnApi";
import { changeUrlMark, maxChar } from "util";
import { Tag } from "theme/commonStyle";
import SkeletonItem, { Skeleton } from "components/skeleton/SkeletonItem";
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
      {story ? (
        <>
          <h4>{maxChar(story?.title, 75)}</h4>
          <a href={story?.url} target="_blank" rel="noopener noreferrer">
            {changeUrlMark(story?.url)}
          </a>
          <TimeInfo story={story} />
        </>
      ) : (
        <>
          <Skeleton as="h4" />
          <SkeletonItem width="50%" />
          <SkeletonItem width="30%" />
        </>
      )}
    </JobWrapper>
  );
};

const JobWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 174px;
  background-color: ${(props) => props.theme.container.lightBlue};
  padding: 16px 12px;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
  h4 {
    height: 65px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: ${(props) => props.theme.text.default};
  }
  a {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.container.header};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default TodaysJob;
