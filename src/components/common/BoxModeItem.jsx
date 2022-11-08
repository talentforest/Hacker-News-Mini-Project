import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStory } from "util/hnApi";
import { changeUrlMark } from "util";
import { Tag } from "theme/commonStyle";
import styled from "styled-components";
import UserPointsTime from "components/common/UserPointsTime";
import Title from "components/common/Title";
import CommentNum from "components/common/CommentNum";

const BoxModeItem = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    story && (
      <Post>
        <a href={story.url} target="_blank" rel="noreferrer">
          <Tag orange>{changeUrlMark(story.url)}</Tag>
          <Title story={story} />
        </a>
        <div>
          <div>
            <UserPointsTime story={story} />
          </div>
          <Link to={`${story.id}`}>
            {story.descendants && <CommentNum story={story} />}
          </Link>
        </div>
      </Post>
    )
  );
};
const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 48%;
  height: 230px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.text.default};
  h4 {
    padding: 12px 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    height: 140px;
    color: ${(props) => props.theme.text.default};
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    color: ${(props) => props.theme.text.lightGray};
    img {
      width: 14px;
      height: 14px;
      margin-right: 2px;
    }
    > div:first-child {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      overflow: hidden;
      > div:last-child {
        span {
          font-size: 10px;
        }
        span:first-child {
          margin-right: 4px;
        }
      }
    }
  }
`;

export default BoxModeItem;
