import { useEffect, useState } from "react";
import { getNewStoryIds } from "../api/hnApi";
import { TNew } from "../homeComponents/TNew";
import { ReloadTitle } from "../components/TodayTitle";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 390px;
  height: 652px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  height: 495px;
  margin: 20px 20px 32px 20px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
`;

export const TNewContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <ReloadTitle title="Today's New" />
      <Container>
        {storyIds.slice(0, 6).map((storyId) => (
          <TNew key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
