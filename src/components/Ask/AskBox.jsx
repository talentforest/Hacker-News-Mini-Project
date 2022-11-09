import { useState, useEffect } from "react";
import { getData } from "util/hnApi";
import { mapTime } from "util/mapTime";
import { Link } from "react-router-dom";
import { maxChar } from "util";
import styled from "styled-components";
import Username from "components/common/Username";
import CutTitle from "components/common/CutTitle";
import CommentNum from "components/common/CommentNum";
import { Skeleton } from "components/skeleton/SkeletonItem";

const AskBox = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => setStory();
  }, [storyId]);

  return (
    <Post>
      {Object.keys(story ?? {}).length ? (
        <>
          <PostBody to={`${story.id}`}>
            <CutTitle title={story.title} />
            <p dangerouslySetInnerHTML={{ __html: maxChar(story.text, 150) }} />
            <span>{mapTime(story.time)}</span>
          </PostBody>
          <PostFooter>
            <Username by={story.by} />
            <span>{story.score} points</span>
            <Link to={`${story.id}`}>
              <CommentNum number={story?.descendants} />
            </Link>
          </PostFooter>
        </>
      ) : (
        <>
          <PostBody as="div">
            <Skeleton as="h4" />
            <Skeleton as="p" />
            <Skeleton as="span" />
          </PostBody>
          <PostFooter>
            <Username />
            <Skeleton as="span" />
            <Skeleton />
          </PostFooter>
        </>
      )}
    </Post>
  );
};

const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 0;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
`;

const PostBody = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  padding: 0 20px;
  height: 80%;
  > h4 {
    color: ${(props) => props.theme.text.default};
    font-weight: 500;
    line-height: 24px;
    min-height: 50px;
    cursor: pointer;
  }
  > p {
    height: 70px;
    overflow: hidden;
    margin-bottom: 10px;

    font-size: 14px;
    color: ${(props) => props.theme.text.default};
    line-height: 18px;
    cursor: pointer;
  }
  > span {
    width: 10vh;
    align-self: flex-end;
    height: 20px;
    display: block;
    text-align: end;
    padding: 2px 0 13px;
    font-size: 12px;
    color: ${(props) => props.theme.text.lightGray};
    font-weight: 400;
  }
`;

const PostFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.border.lightGray};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 30px;
  font-size: 12px;
  padding: 12px 20px 0;
  color: ${(props) => props.theme.text.lightGray};
  > span {
    color: ${(props) => props.theme.text.lightGray};
    width: 40%;
  }
  > a {
    margin-left: auto;
  }
  > div:last-child {
    width: 30%;
    margin-left: auto;
  }
`;

export default AskBox;
