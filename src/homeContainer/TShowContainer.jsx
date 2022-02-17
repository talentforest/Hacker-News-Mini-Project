import { useState, useEffect } from "react";
import styled from "styled-components";
import { TShow } from "../HomeComponents/TShow";
import { getShowStoryIds } from "../util/hnApi";
import { ReloadTitle } from "../CommonComponents/TodayTitle";

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

export const TShowContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState([]);

  useEffect(() => {
    getShowStoryIds().then((data) => setStoryIds(data));
  }, []);

  const reloadData = () => setRandomNumber(Math.floor(Math.random() * 39 + 1));

  return (
    <Wrapper>
      <ReloadTitle title="Today's Show" reloadData={reloadData} />
      <Container>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TShow key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
