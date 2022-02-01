import { useState, useEffect } from "react";
import styled from "styled-components";
import { TJob } from "../homeComponents/TJob";
import { getJobStoryIds } from "../api/hnApi";

const Container = styled.div`
  display: flex;
  width: 390px;
  overflow: scroll;
  height: 266px;
  padding: 20px 20px 72px 20px;
  background-color: #fff;
`;

export const TJobContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Container>
      {storyIds.slice(0, 5).map((storyId, i) => (
        <TJob key={i} storyId={storyId} storyIds={storyIds} />
      ))}
    </Container>
  );
};
