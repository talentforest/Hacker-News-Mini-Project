import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { changeUrlMark, maxChar } from "util";
import SkeletonItem, {
  Skeleton,
} from "components/common/skeleton/SkeletonItem";
import styled from "styled-components";
import { Tag } from "./TodaysShowPost";
import { AccessTime } from "@material-ui/icons";
import { mapTime } from "util";

const TodaysJobPost = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <JobWrapper>
      <Tag orange>Software Engineers</Tag>
      {Object.keys(story ?? {}).length ? (
        <>
          <h4>{maxChar(story?.title, 75)}</h4>
          <a href={story?.url} target="_blank" rel="noopener noreferrer">
            {changeUrlMark(story?.url)}
          </a>
          <Time>
            <AccessTime />
            <span>{mapTime(story?.time)}</span>
          </Time>
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

const Time = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.lightGray};
  span {
    font-weight: 400;
    font-size: 12px;
  }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;

export default TodaysJobPost;
