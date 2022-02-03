import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TUser } from "../homeComponents/TUser";
import { OnlyTitle } from "../components/TodayTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 290px;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 370px;
  height: 160px;
  margin: 20px 0px 56px 20px;
  overflow: scroll;
  border-radius: 8px;
`;

export const TUserContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <OnlyTitle title="Today's User" />
      <Container>
        {storyIds.slice(0, 1).map((storyId, index) => (
          <TUser key={storyId} storyId={storyId} storyIds={storyIds} />
        ))}
      </Container>
    </Wrapper>
  );
};
