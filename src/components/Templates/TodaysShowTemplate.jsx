import { useState, useEffect } from "react";
import { getShowStoryIds } from "util/hnApi";
import { useReloadData } from 'hooks/index';
import styled from "styled-components";
import TodaysShow from "../Home/TodaysShow";
import TitleReloadBtn from "../Home/common/TitleReloadBtn";

const TodaysShowTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, reloadNewData] = useReloadData(storyIds);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <Container>
      <TitleReloadBtn
        title="Today's Show"
        reloadNewData={reloadNewData}
      />
      <div>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TodaysShow key={storyId} storyId={storyId} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  > div:last-child {
    display: flex;
    height: 300px;
    overflow: scroll;
    padding: 20px 0px 56px 20px;
    margin-bottom: 12px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default TodaysShowTemplate;
