import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "util/hnApi";
import PostTitle from "components/atom/PostTitle";
import styled from "styled-components";
import SkeletonItem from "components/atom/skeleton/SkeletonItem";

const TodaysAskPost = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <LinkBox to={`/ask/${storyId}`}>
      {Object.keys(story ?? {}).length ? (
        <PostTitle title={story?.title} />
      ) : (
        <>
          <SkeletonItem height="18px" />
          <SkeletonItem width="30%" height="18px" />
        </>
      )}
    </LinkBox>
  );
};

const LinkBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 76px;
  padding: 0 14px;
  margin-bottom: 15px;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text.default};
  background-color: ${(props) => props.theme.container.default};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export default TodaysAskPost;
