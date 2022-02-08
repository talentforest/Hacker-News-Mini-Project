import React, { useState, useEffect, memo } from "react";
import { getTopStory } from "../api/hnApi";
import { mapTime } from "../time/mapTime";
import styled from "styled-components";

const TTopWrapper = styled.section`
  display: flex;
  padding: 16px 14px 14px;
  height: 98px;
  position: relative;
`;
const Ranking = styled.div`
  width: 23px;
  height: 68px;
  margin-right: 24px;
  font-size: 24px;
  font-weight: 600;
  color: #ed702d;
`;
const Title = styled.h4`
  width: 275px;
  font-weight: 600;
  line-height: 20px;
  color: ${(props) => props.theme.textColor};
`;
const Info = styled.div`
  display: flex;
  span {
    margin: 14px 8px 0 0;
    font-size: 12px;
    font-weight: 400;
    color: #727272;
  }
`;

export const TTop = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getTopStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  const topRankStory = story.score;
  // console.log(topRankStory);
  console.log(story);

  return story && story.url ? (
    <TTopWrapper>
      <Ranking>{index + 1}</Ranking>
      <div>
        <a href={story.url}>
          <Title>
            {story.title.length > 60
              ? `${story.title.slice(0, 60)}...`
              : story.title}
          </Title>
        </a>
        <Info>
          <span>{story.by}</span>
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </Info>
      </div>
    </TTopWrapper>
  ) : null;
}, []);
