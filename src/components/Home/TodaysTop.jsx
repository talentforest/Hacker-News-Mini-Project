import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodaysTop = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Wrapper>
      <div>{index + 1}</div>
      <div>
        <a href={story.url} target="_blank" rel="noreferrer">
          <h4>{maxChar(story.title, 55)}</h4>
        </a>
        <div>
          <Link to={`/userprofile/${story.by}`}>
            <span>{story.by}</span>
          </Link>
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 98px;
  padding: 16px 14px 14px;
  > div:first-child {
    width: 15%;
    height: 68px;
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.text.orange};
  }
  > div:last-child {
    width: 85%;
    h4 {
      font-weight: 600;
      line-height: 20px;
      color: ${(props) => props.theme.text.default};
    }
    div {
      display: flex;
      align-items: baseline;
      span:first-child {
        font-size: 12px;
        font-weight: 400;
      }
      span {
        margin: 14px 8px 0 0;
        font-size: 12px;
        font-weight: 400;
        color: ${(props) => props.theme.text.lightGray};
      }
    }
  }
`;

export default TodaysTop;
