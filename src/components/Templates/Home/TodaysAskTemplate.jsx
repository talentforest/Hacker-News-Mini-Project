import { useState, useEffect } from "react";
import { getAskStoryIds } from "util/hnApi";
import { useReloadData } from 'hooks/index';
import styled from "styled-components";
import TodaysAsk from '../../Home/TodaysAsk';
import TitleReloadBtn from '../../Home/common/TitleReloadBtn';

const TodaysAskTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [randomNumber, reloadNewData] = useReloadData(storyIds);

  useEffect(() => {
    getAskStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <Container>
      <TitleReloadBtn
        title="Today's Ask"
        reloadNewData={reloadNewData} />
      <div>
        {storyIds.slice(randomNumber, randomNumber + 5).map((storyId) => (
          <TodaysAsk key={storyId} storyId={storyId} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  > div:last-child {
    height: 520px;
    padding: 20px 20px 56px 20px;
    background-color: ${(props) => props.theme.backgroundColor};
    margin-bottom: 12px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    }
`;

export default TodaysAskTemplate;
