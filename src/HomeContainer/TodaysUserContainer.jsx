import { useEffect, useState } from "react";
import { getTopStoryIds } from "../util/hnApi";
import TodaysUser from "../HomeComponents/TodaysUser";
import Title from "../components/common/Title";
import styled from "styled-components";

const TodaysUserContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds)
    return () => setStoryIds([]);
  }, []);

  return (
    <Wrapper>
      <Title title="Today's User" />
      <Container>
        {storyIds.slice(0, 5).map((storyId, index) => (
          <TodaysUser key={storyId} storyId={storyId} index={index} />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 290px;
  overflow: hidden;
  margin: 0 auto 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  overflow: scroll;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 160px;
  margin: 20px 0px 56px 20px;
  border-radius: 8px;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default TodaysUserContainer;
