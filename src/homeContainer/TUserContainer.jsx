import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TUser } from "../homeComponents/TUser";
import { OnlyTitle } from "../components/TodayTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 290px;
  overflow: hidden;
  margin: 0 auto 12px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;
const Container = styled.div`
  overflow: scroll;
  /* border: 1px solid red; */
  background-color: ${(props) => props.theme.backgroundColor};
  width: 370px;
  height: 160px;
  margin: 20px 0px 56px 20px;
  border-radius: 8px;
  display: flex;
`;

export const TUserContainer = () => {
  // 일단 탑스토리에서 스토리아이디 얻기
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <OnlyTitle title="Today's User" />
      <Container>
        {storyIds.slice(0, 5).map((storyId, index) => (
          <TUser key={storyId} storyId={storyId} index={index} />
        ))}
      </Container>
    </Wrapper>
  );
};
