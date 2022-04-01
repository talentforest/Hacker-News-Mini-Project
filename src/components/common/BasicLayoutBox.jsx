import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getStory } from "util/hnApi";
import { urlName } from 'util';
import { WhiteTag } from 'theme/commonStyle';
import styled from "styled-components";
import UserPointsTime from 'components/common/UserPointsTime';
import OrangeTitle from 'components/common/OrangeTitle';
import CommentNum from 'components/common/CommentNum';

const BasicLayoutBox = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <a href={story.url} target="_blank" rel="noreferrer">
        {urlName(story) ? <WhiteTag>{urlName(story)}</WhiteTag> : <></>}
        {story?.title?.includes("Ask HN" || "Tell HN")
          ? <h4><OrangeTitle story={story} /></h4>
          : <h4>{story.title}</h4>}
      </a>
      <div>
        <UserPointsTime story={story} />
        <Link to={`${story.id}`}>
          {story.descendants ? <CommentNum story={story} /> : <></>}
        </Link>
      </div>
    </Post >
  )
}
const Post = styled.div`
  position: relative;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.textColor};
  h4 {
    padding: 12px 0;
    font-weight: 600;
    line-height: 24px;
    height: 80px;
    color: ${(props) => props.theme.textColor};
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    color: #949494;
    img {
      width: 16px;
      height: 16px;
      margin-right: 3.3px;
    }
    > div:last-child {
      display: flex;
      align-items: center;
      color: #ed702d;
    }
  }
`;

export default BasicLayoutBox;
