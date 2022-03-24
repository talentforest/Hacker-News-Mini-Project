import { useState, useEffect } from "react";
import { getShowStoryIds } from "../../util/hnApi";
import styled from "styled-components";
import TodaysShow from "./HomeComponents/TodaysShow";
import TitleReloadBtn from "../common/TitleReloadBtn";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  display: flex;
  height: 300px;
  overflow: scroll;
  padding: 20px 0px 56px 20px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodaysShowContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  const reloadNewData = () =>
    setRandomNumber(Math.floor(Math.random() * storyIds.length));

  return (
    <Wrapper>
      <TitleReloadBtn title="Today's Show" reloadNewData={reloadNewData} />
      <Container>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TodaysShow key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default TodaysShowContainer;
