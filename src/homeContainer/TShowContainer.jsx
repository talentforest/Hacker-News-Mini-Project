import { useState, useEffect } from "react";
import styled from "styled-components";
import { TShow } from "../HomeComponents/TShow";
import { getShowStoryIds } from "../util/hnApi";
import { ReloadTitle } from "../CommonComponents/TodayTitle";

const Wrapper = styled.div`
  width: 390px;

  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  display: flex;
  width: 350px;
  height: 300px;
  margin: 0 auto;
  overflow: scroll;
  padding: 20px 0px 56px 0px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TShowContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <ReloadTitle title="Today's Show" />
      <Container>
        {storyIds.slice(0, 5).map((storyId) => (
          <TShow key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
