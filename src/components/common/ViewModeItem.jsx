import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "util/hnApi";
import { changeUrlMark } from "util";
import styled from "styled-components";
import UserPointsTime from "components/common/UserPointsTime";
import CutTitle from "components/common/CutTitle";
import CommentNum from "components/common/CommentNum";
import SkeletonItem, { Skeleton } from "components/skeleton/SkeletonItem";
import Username from "./Username";
import { Tag } from "components/home/TodaysShow";

const ViewModeItem = ({ storyId, viewMode }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => setStory();
  }, [storyId]);

  return (
    <Post $viewMode={viewMode}>
      {Object.keys(story ?? {}).length ? (
        <>
          <Tag orange>{changeUrlMark(story.url)}</Tag>
          {story.text ? (
            <Link to={`${story.id}`}>
              <CutTitle title={story.title} />
            </Link>
          ) : (
            <a href={story.url} target="_blank" rel="noreferrer">
              <CutTitle title={story.title} />
            </a>
          )}
          <Footer>
            {viewMode === "list-mode" && <UserPointsTime story={story} />}
            {viewMode === "box-mode" && <Username by={story?.by} />}
            <Link to={`${story.id}`}>
              <CommentNum number={story?.descendants} />
            </Link>
          </Footer>
        </>
      ) : (
        <>
          <SkeletonItem width="30%" />
          <Skeleton as="h4" />
          <Footer>
            <UserPointsTime />
            <SkeletonItem width="15%" />
          </Footer>
        </>
      )}
    </Post>
  );
};
const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: ${(props) => (props.$viewMode === "list-mode" ? "100%" : "48%")};
  height: ${(props) => (props.$viewMode === "list-mode" ? "148px" : "230px")};
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.text.default};
  h4 {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    height: ${(props) => (props.$viewMode === "list-mode" ? "60px" : "140px")};
    color: ${(props) => props.theme.text.default};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  > div {
    width: 60%;
    overflow: hidden;
    flex-basis: 100%;
  }
`;

export default ViewModeItem;
