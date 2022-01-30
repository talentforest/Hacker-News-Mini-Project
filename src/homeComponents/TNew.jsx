import React, { useState, useEffect, memo } from "react";
import { getNewStory } from "../api/hnApi";
import { mapTime } from "../time/mapTime";
import styled from "styled-components";

const NewWrapper = styled.section`
  box-sizing: border-box;
  padding-top: 14px;
  height: 124px;
  border-bottom: 0.5px solid #dfdfdf;
`;
const Time = styled.div`
  background: rgba(76, 165, 196, 0.15);
  padding: 5px 5px 4px;
  border-radius: 10px;
  width: 81px;
  height: 19px;
  font-size: 10px;
  font-weight: 500;
  color: #4ca5c4;
`;
const StoryTitle = styled.h4`
  padding: 5px 0 8px;
  height: 53px;
  font-weight: 600;
  line-height: 20px;
  color: #202020;
  /* border: 1px solid red; */
`;
const Author = styled.span`
  display: flex;
  align-items: center;
  padding-top: 8px;
  /* background-color: red; */
  font-size: 12px;
  font-weight: 500;
  color: #727272;
  /* border: 1px solid red; */
  img {
    width: 16px;
    margin-right: 3.33px;
  }
`;

export const TNew = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getNewStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  // console.log(story);
  return story && story.url ? (
    <NewWrapper>
      <Time>{mapTime(story.time)} ago</Time>
      <a href="{story.url}">
        <StoryTitle>
          {story.title.length > 73
            ? `${story.title.slice(0, 73)}...`
            : story.title}
        </StoryTitle>
      </a>
      <Author>
        <img src="img/user.png" alt="usericon" />
        {story.by}
      </Author>
    </NewWrapper>
  ) : null;
});
