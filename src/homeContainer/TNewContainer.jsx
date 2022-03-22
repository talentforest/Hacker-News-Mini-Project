import { useEffect, useState } from "react";
import { getNewStoryIds } from "../util/hnApi";
import { TNew } from "../HomeComponents/TNew";
import TitleReloadBtn from "../components/common/TitleReloadBtn";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
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
  const [randomNumber, setRandomNumber] = useState([]);

  useEffect(() => {
    getNewStoryIds().then((data) => setStoryIds(data));
  }, []);

  const reloadNewData = () =>
    setRandomNumber(Math.floor(Math.random() * storyIds.length));

  return (
    <Wrapper>
      <TitleReloadBtn title="Today's New" reloadNewData={reloadNewData} />
      <Container>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TNew key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
