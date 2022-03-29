import { useState, useEffect, memo } from "react";
import { getStory } from "util/hnApi";
import { mapTime, maxChar } from "util";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrangeTitle from 'components/common/OrangeTitle';

const TodaysTop = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return story && story.url ? (
    <TTopWrapper>
      <Ranking>{index + 1}</Ranking>
      <div>
        <a href={story.url} target="_blank" rel="noreferrer">
          <Title>
            {story?.title.includes("Show HN" || "Ask HN" || "Tell HN") ?
              <OrangeTitle story={story} /> : maxChar(story)}
          </Title>
        </a>
        <Info>
          <Link to={`/userprofile/${story.by}`}>
            <span>{story.by}</span>
          </Link>
          <span>{story.score} points</span>
          <span>{mapTime(story.time)}</span>
        </Info>
      </div>
    </TTopWrapper>
  ) : null;
});

const TTopWrapper = styled.section`
  position: relative;
  display: flex;
  height: 98px;
  padding: 16px 14px 14px;
`;
const Ranking = styled.div`
  height: 68px;
  margin-right: 24px;
  font-size: 24px;
  font-weight: 600;
  color: #ed702d;
`;
const Title = styled.h4`
  font-weight: 600;
  line-height: 20px;
  color: ${(props) => props.theme.textColor};
`;
const Info = styled.div`
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
    color: #727272;
  }
`;

export default TodaysTop;
