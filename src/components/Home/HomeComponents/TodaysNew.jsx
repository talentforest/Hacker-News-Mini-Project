import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar } from "util";
import styled from "styled-components";
import Username from 'components/common/Username';

const TodaysNew = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return story && story.url ? (
    <NewWrapper>
      <a href={story.url} target="_blank" rel="noreferrer">
        <div>
          <span>{mapTime(story.time)} ago</span>
          <h4>{maxChar(story)}</h4>
        </div>
      </a>
      <span>
        <Username story={story} />
      </span>
    </NewWrapper>
  ) : null;
});

const NewWrapper = styled.div`
  border-bottom: 1px solid #333;
  box-sizing: border-box;
  padding: 14px 14px 0 14px;
  height: 124px;
  > a {
    > div {
      span {
        background: rgba(76, 165, 196, 0.15);
        padding: 5px 5px 4px;
        border-radius: 10px;
        width: 81px;
        height: 19px;
        font-size: 10px;
        font-weight: 500;
        color: #4ca5c4;
      }
      h4 {
        color: ${(props) => props.theme.textColor};
        padding: 10px 0 8px;
        height: 53px;
        font-weight: 600;
        line-height: 20px;
      }
    }
  }
  > span {
    display: inline-block;
    padding: 8px 0 10px;
    font-size: 12px;
    font-weight: 500;
    color: #727272;
  }
`;

export default TodaysNew;
