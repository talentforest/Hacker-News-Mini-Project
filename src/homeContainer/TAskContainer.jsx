import { useState, useEffect } from "react";
import styled from "styled-components";
import { TAsk } from "../HomeComponents/TAsk";
import { getAskStoryIds } from "../util/hnApi";
import TitleReloadBtn from "../components/common/TitleReloadBtn";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  height: 520px;
  padding: 20px 20px 56px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TAskContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);

  useEffect(() => {
    getAskStoryIds().then((data) => setStoryIds(data));
  }, []);

  const reloadNewData = () =>
    setRandomNumber(Math.floor(Math.random() * storyIds.length));

  return (
    <Wrapper>
      <TitleReloadBtn title="Today's Ask" reloadNewData={reloadNewData} />
      <Container>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TAsk key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
