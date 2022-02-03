import { useState, useEffect } from "react";
import styled from "styled-components";
import { TJob } from "../homeComponents/TJob";
import { getJobStoryIds } from "../api/hnApi";
import { OnlyTitle } from "../components/TodayTitle";

const Wrapper = styled.div`
  width: 390px;
  height: 334px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  display: flex;
  width: 390px;
  overflow: scroll;
  height: 266px;
  padding: 20px 20px 72px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
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
        {storyIds.slice(0, 5).map((storyId, i) => (
          <TJob key={i} storyId={storyId} storyIds={storyIds} />
        ))}
      </Container>
    </Wrapper>
  );
};
