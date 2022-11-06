import { useState, useEffect } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar } from "util";
import styled from "styled-components";
import Username from "components/common/Username";

const TodaysNew = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    story && (
      <Wrapper>
        <a href={story.url} target="_blank" rel="noreferrer">
          <div>
            <span>{mapTime(story.time)} ago</span>
            <h4>{maxChar(story.title, 68)}</h4>
          </div>
        </a>
        <span>
          <Username story={story} />
        </span>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border.lightGray};
  box-sizing: border-box;
  padding: 14px 14px 0 14px;
  height: 124px;
  &:last-child {
    border-bottom: none;
  }
  > a {
    > div {
      span {
        background: ${(props) => props.theme.container.lightBlue};
        padding: 5px 5px 4px;
        border-radius: 10px;
        width: 81px;
        height: 19px;
        font-size: 10px;
        font-weight: 500;
        color: ${(props) => props.theme.text.blue};
      }
      h4 {
        color: ${(props) => props.theme.text.default};
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
    color: ${(props) => props.theme.text.default};
  }
`;

export default TodaysNew;
