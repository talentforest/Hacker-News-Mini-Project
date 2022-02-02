import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import { getJobStory } from "../api/hnApi";
import { mapTime } from "../time/mapTime";

const Post = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 104px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  background-color: #fff;
  padding: 0 12px;
  margin-bottom: 8px;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 24px;
    height: 64px;
    padding: 12px 0 4px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #b7b7b7;
  height: 40px;
  a {
    text-decoration: underline;
  }
`;

export const JobPostBox = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getJobStory(storyId).then((data) => data && data.title && setStory(data));
  }, []);

  return story && story.title ? (
    <Post>
      <h4>{story.title}</h4>
      <Info>
        <a href="#">decycle.com</a>
        <span>{mapTime(story.time)}</span>
      </Info>
    </Post>
  ) : null;
});
