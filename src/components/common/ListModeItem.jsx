import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getStory } from "util/hnApi";
import { urlName } from 'util';
import { WhiteTag } from 'theme/commonStyle';
import styled from "styled-components";
import UserPointsTime from 'components/common/UserPointsTime';
import OrangeTitle from 'components/common/OrangeTitle';
import CommentNum from 'components/common/CommentNum';

const ListModeItem = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      {!story.text ?
        <a href={story.url} target="_blank" rel="noreferrer">
          {urlName(story) ? <WhiteTag>{urlName(story)}</WhiteTag> : <></>}
          {story?.title?.includes("Ask HN") || story?.title?.includes("Tell HN") || story?.title?.includes("Show HN")
            ? <h4><OrangeTitle story={story} /></h4>
            : <h4>{story.title}</h4>}
        </a> :
        <Link to={`${story.id}`}>
          {urlName(story) ? <WhiteTag>{urlName(story)}</WhiteTag> : <></>}
          {story?.title?.includes("Ask HN") || story?.title?.includes("Tell HN") || story?.title?.includes("Show HN")
            ? <h4><OrangeTitle story={story} /></h4>
            : <h4>{story.title}</h4>}
        </Link>
      }
      <div>
        <div>
          <UserPointsTime story={story} />
        </div>
        <Link to={`${story.id}`}>
          {story.descendants ? <CommentNum story={story} /> : <></>}
        </Link>
      </div>
    </Post >
  )
}
const Post = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
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
