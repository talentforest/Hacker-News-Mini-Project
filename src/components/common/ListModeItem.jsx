import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStory } from "util/hnApi";
import { changeUrlMark } from "util";
import { Tag } from "theme/commonStyle";
import styled from "styled-components";
import UserPointsTime from "components/common/UserPointsTime";
import OrangeTitle from "components/common/OrangeTitle";
import CommentNum from "components/common/CommentNum";

const ListModeItem = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    story && (
      <Post>
        {!story.text ? (
          <a href={story.url} target="_blank" rel="noreferrer">
            <Tag>{changeUrlMark(story.url)}</Tag>
            <OrangeTitle story={story} />
          </a>
        ) : (
          <Link to={`${story.id}`}>
            <Tag>{changeUrlMark(story.url)}</Tag>
            <OrangeTitle story={story} />
          </Link>
        )}
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
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.text.default};
  h4 {
    padding: 12px 0;
    font-weight: 600;
    line-height: 24px;
    height: 80px;
    color: ${(props) => props.theme.text.default};
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    color: ${(props) => props.theme.text.lightGray};
    > div {
      display: flex;
      align-items: center;
      width: fit-content;
      > div:last-child {
        span:first-child {
          margin-right: 5px;
        }
      }
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 3.3px;
    }
  }
`;

export default ListModeItem;
