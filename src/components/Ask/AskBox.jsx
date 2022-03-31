import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime } from "util/mapTime";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Username from 'components/common/Username';
import OrangeTitle from 'components/common/OrangeTitle';
import CommentNum from 'components/common/CommentNum';

const AskBox = memo(function AskStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  const text = story.text?.length > 150
    ? `${story.text.slice(0, 150)}...`
    : story.text

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
          dangerouslySetInnerHTML={{ __html: text }}
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
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.containerColor};
`;
const Title = styled.h4`
  color: ${(props) => props.theme.textColor};
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
  color: ${(props) => props.theme.textColor};
  line-height: 18px;
  cursor: pointer;
`;
const Time = styled.span`
  border-bottom: 1px solid #e2e2e2;
  height: 27px;
  display: block;
  text-align: end;
  padding: 2px 20px 13px 0;
  font-size: 12px;
  color: #949494;
  font-weight: 400;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 12px;
  padding: 12px 20px;
  color: #949494;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3.3px;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  > span {
    color: #949494;
    margin-right: 6px;
  }
`;

export default AskBox;
