import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { urlName } from "util";
import { WhiteTag } from 'theme/commonStyle';
import styled from "styled-components";
import UserPointsTime from 'components/common/UserPointsTime';

const NewBox = memo(function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <a href={story.url} target="_blank" rel="noreferrer">
        {urlName(story) ? <WhiteTag>{urlName(story)}</WhiteTag> : <></>}
        <h4>{story.title}</h4>
      </a>
      <UserPointsTime story={story} />
    </Post>
  );
});

const Post = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  padding: 14px 12px 16px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.textColor};
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 80px;
    padding: 5px 0;
    color: ${(props) => props.theme.textColor};
  }
`;


export default NewBox;
