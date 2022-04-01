import { useEffect, useState } from "react";
import { getNewStoryIds } from "util/hnApi";
import { useReloadData } from 'hooks/index';
import styled from "styled-components";
import TodaysNew from "../Organisms/TodaysNew";
import TitleReloadBtn from "../common/TitleReloadBtn";

const TodaysNewContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, reloadNewData] = useReloadData(storyIds);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <Container>
      <TitleReloadBtn
        title="Today's New"
        reloadNewData={reloadNewData}
      />
      <div>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TodaysNew key={storyId} storyId={storyId} />
        ))}
      </div>
    </Container>
  )
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 650px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  > div:last-child {
    height: 495px;
    margin: 20px 20px 32px 20px;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${(props) => props.theme.containerColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  }
`;

export default TodaysNewContainer;
