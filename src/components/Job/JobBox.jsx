import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar, changeUrlMark } from "util";
import { Site } from "theme/commonStyle";
import styled from "styled-components";

const JobBox = memo(function JobStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    story && (
      <Post>
        <h4>{maxChar(story.title, 80)}</h4>
        <Info>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            <Site>{changeUrlMark(story.url)}</Site>
          </a>
          <span>{mapTime(story.time)}</span>
        </Info>
      </Post>
    )
  );
});

const Post = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 104px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.default};
  padding: 0 12px;
  margin: 0 20px 10px;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
    padding: 12px 0 4px;
    color: ${(props) => props.theme.text.default};
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.lightGray};
  height: 40px;
  a {
    color: ${(props) => props.theme.container.button};
  }
`;

export default JobBox;
