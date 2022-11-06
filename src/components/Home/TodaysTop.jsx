import { useState, useEffect } from "react";
import { maxChar } from "util";
import { getStory } from "util/hnApi";
import styled from "styled-components";
import UsernamePointsTime from "components/common/UsernamePointsTime";

const TodaysTop = ({ storyId, index }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <ListBox>
      <Rank>{index + 1}</Rank>
      <Description>
        <a href={story.url} target="_blank" rel="noreferrer">
          <h4>{maxChar(story.title, 55)}</h4>
        </a>
        <UsernamePointsTime story={story} />
      </Description>
    </ListBox>
  );
};

const ListBox = styled.li`
  position: relative;
  display: flex;
  height: 98px;
  padding: 16px 14px 14px;
`;

const Rank = styled.span`
  width: 15%;
  height: 68px;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text.orange};
`;

const Description = styled.div`
  width: 85%;
  h4 {
    font-weight: 600;
    line-height: 20px;
    color: ${(props) => props.theme.text.default};
  }
`;

export default TodaysTop;
