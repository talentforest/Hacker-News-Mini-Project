import React, { useState, useEffect, memo } from "react";
import { getNewStory } from "../util/hnApi";
import { mapTime } from "../util/mapTime";
import styled from "styled-components";

const NewWrapper = styled.div`
  box-sizing: border-box;
  padding: 14px 14px 0 14px;
  height: 124px;
  div {
    height: 1px;
    background-color: #b7b7b7;
  }
`;
const Time = styled.span`
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
  color: ${(props) => props.theme.textColor};
  padding: 10px 0 8px;
  height: 53px;
  font-weight: 600;
  line-height: 20px;
`;
const Author = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 0 16px;
  font-size: 12px;
  font-weight: 500;
  color: #727272;
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

  return story && story.url ? (
    <NewWrapper>
      <Time>{mapTime(story.time)} ago</Time>
      <a href={story.url}>
        <StoryTitle>
          {story.title.length > 68
            ? `${story.title.slice(0, 68)}...`
            : story.title}
        </StoryTitle>
      </a>
      <Author>
        <img src="/assets/user.png" alt="usericon" />
        {story.by}
      </Author>
      {/* 라인을 만들기 위한 div */}
      <div></div>
    </NewWrapper>
  ) : null;
});
