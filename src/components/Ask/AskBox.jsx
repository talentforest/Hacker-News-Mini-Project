import { useState, useEffect } from "react";
import { getStory } from "util/hnApi";
import { mapTime } from "util/mapTime";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Username from "components/common/Username";
import Title from "components/common/Title";
import CommentNum from "components/common/CommentNum";
import { maxChar } from "util";

const AskBox = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <PostBody to={`${story.id}`}>
        <Title title={story.title} />
        <p dangerouslySetInnerHTML={{ __html: maxChar(story.text, 150) }} />
        <span>{mapTime(story.time)}</span>
      </PostBody>
      <PostFooter>
        <Username story={story} />
        <span>{story.score} points</span>
        <Link to={`${story.id}`}>
          <CommentNum story={story} />
        </Link>
      </PostFooter>
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
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
`;

const PostBody = styled(Link)`
  > h4 {
    color: ${(props) => props.theme.text.default};
    font-weight: 500;
    line-height: 24px;
    padding: 12px 20px 4px;
    cursor: pointer;
  }
  > p {
    height: 62px;
    overflow: hidden;
    margin-bottom: 10px;
    padding: 6px 20px 10px;
    font-size: 14px;
    color: ${(props) => props.theme.text.default};
    line-height: 18px;
    cursor: pointer;
  }
  > span {
    height: 27px;
    display: block;
    text-align: end;
    padding: 2px 20px 13px 0;
    font-size: 12px;
    color: ${(props) => props.theme.text.lightGray};
    font-weight: 400;
  }
`;

const PostFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.border.lightGray};
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 12px;
  padding: 12px 20px 15px;
  color: ${(props) => props.theme.text.lightGray};
  img {
    flex-basis: 100%;
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
  > div {
    flex-basis: 100%;
    color: ${(props) => props.theme.text.default};
  }
  > span {
    flex-basis: 100%;
    color: ${(props) => props.theme.text.lightGray};
  }
`;

export default AskBox;
