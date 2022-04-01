import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar, urlName } from "util";
import { Site } from 'theme/commonStyle';
import styled from "styled-components";

const JobBox = memo(function JobStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return story && story.title ? (
    <Post>
      <h4>{maxChar(story.title, 80)}</h4>
      <Info>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          <Site>{urlName(story)}</Site>
        </a>
        <span>{mapTime(story.time)}</span>
      </Info>
    </Post>
  ) : <></>;
});

const Post = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  height: 104px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  padding: 0 12px;
  margin-bottom: 8px;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
    padding: 12px 0 4px;
    color: ${(props) => props.theme.textColor};
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #949494;
  height: 40px;
  a {
    color: #b7b7b7;
  }
`;

export default JobBox;
