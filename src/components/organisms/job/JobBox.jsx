import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { mapTime, maxChar, changeUrlMark } from "util";
import styled from "styled-components";
import SkeletonItem, { Skeleton } from "components/atom/skeleton/SkeletonItem";

const JobBox = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => setStory();
  }, [storyId]);

  return Object.keys(story ?? {}).length ? (
    <Post href={story?.url} target="_blank" rel="noopener noreferrer">
      <h4>{maxChar(story?.title, 80)}</h4>
      <Info>
        <Site>{changeUrlMark(story?.url)}</Site>
        <span>{mapTime(story?.time)}</span>
      </Info>
    </Post>
  ) : (
    <Post as="div">
      <Skeleton as="h4" />
      <Info>
        <SkeletonItem width="40%" />
        <SkeletonItem width="25%" />
      </Info>
    </Post>
  );
};

const Post = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 104px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.default};
  padding: 12px;
  margin: 0 20px 10px;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    min-height: 50px;
    color: ${(props) => props.theme.text.default};
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  span {
    color: ${(props) => props.theme.container.button};
  }
`;

const Site = styled.span`
  color: ${(props) => props.theme.text.orange};
  text-decoration: underline;
  cursor: pointer;
`;

export default JobBox;
