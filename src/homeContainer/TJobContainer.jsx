import { useState, useEffect } from "react";
import styled from "styled-components";
import { TJob } from "../HomeComponents/TJob";
import { getJobStoryIds } from "../util/hnApi";
import { OnlyTitle } from "../CommonComponents/TodayTitle";

const Wrapper = styled.div`
  width: 100%;
  height: 334px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  display: flex;
  overflow: scroll;
  height: 266px;
  padding: 20px 20px 72px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TJobContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <OnlyTitle title="Today's Job" />
      <Container>
        {storyIds.slice(0, 10).map((storyId) => (
          <TJob key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
