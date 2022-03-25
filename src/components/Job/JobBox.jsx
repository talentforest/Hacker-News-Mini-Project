import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime } from "util/mapTime";
import styled from "styled-components";

const JobBox = memo(function JobStory({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  const urlName = story.url?.slice(8).split("/")[0];

  return story && story.title ? (
    <Post>
      <h4>{story.title}</h4>
      <Info>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {urlName?.includes("www") ? urlName.slice(4) : urlName}
        </a>
        <span>{mapTime(story.time)}</span>
      </Info>
    </Post>
  ) : null;
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
    text-decoration: underline;
    color: #b7b7b7;
  }
`;

export default JobBox;
