import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime } from "util/mapTime";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Username from "components/common/Username";
import OrangeTitle from "components/common/OrangeTitle";
import CommentNum from "components/common/CommentNum";
import { maxChar } from "util";

const AskBox = memo(function AskStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <Link to={`${story.id}`}>
        <Title>
          {story.title?.includes("Ask HN") ||
          story.title?.includes("Tell HN") ? (
            <OrangeTitle story={story} />
          ) : (
            story.title
          )}
        </Title>
        <PostText
          dangerouslySetInnerHTML={{ __html: maxChar(story.text, 150) }}
        />
        <Time>{mapTime(story.time)}</Time>
      </Link>
      <Info>
        <User>
          <Username story={story} />
          <span>{story.score} points</span>
        </User>
        <Link to={`${story.id}`}>
          <CommentNum story={story} />
        </Link>
      </Info>
    </Post>
  );
});

const Post = styled.div`
  height: 201px;
  margin-bottom: 12px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.container.default};
`;
const Title = styled.h4`
  color: ${(props) => props.theme.text.default};
  font-weight: 500;
  line-height: 24px;
  padding: 12px 20px 4px;
  padding: 12px 20px 0;
  cursor: pointer;
`;
const PostText = styled.p`
  height: 62px;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 6px 20px 10px;
  font-size: 14px;
  color: ${(props) => props.theme.text.default};
  line-height: 18px;
  cursor: pointer;
`;
const Time = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.border.lightGray};
  height: 27px;
  display: block;
  text-align: end;
  padding: 2px 20px 13px 0;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  font-weight: 400;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 12px;
  padding: 12px 20px;
  color: ${(props) => props.theme.text.lightGray};
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.default};
  > span {
    color: ${(props) => props.theme.text.lightGray};
    margin-right: 6px;
  }
`;

export default AskBox;
