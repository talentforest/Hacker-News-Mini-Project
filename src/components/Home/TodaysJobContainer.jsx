import { useState, useEffect } from "react";
import { getJobStoryIds } from "../../util/hnApi";
import styled from "styled-components";
import TodaysJob from "./HomeComponents/TodaysJob";
import Title from "../common/Title";

const TodaysJobContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds(setStoryIds)
  }, []);

  return (
    <Wrapper>
      <Title title="Today's Job" />
      <Box>
        {storyIds.slice(0, 10).map((storyId) => (
          <TodaysJob key={storyId} storyId={storyId} />
        ))}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 334px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Box = styled.div`
  display: flex;
  overflow: scroll;
  height: 266px;
  padding: 20px 20px 72px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  &::-webkit-scrollbar {
    display: none;
  }
`

export default TodaysJobContainer;
