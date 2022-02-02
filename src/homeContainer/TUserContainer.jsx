import { useEffect, useState } from "react";
import { getTopStoryIds } from "../api/hnApi";
import { TUser } from "../homeComponents/TUser";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 222px;
  padding-top: 20px;
  margin-bottom: 12px;
  background-color: #fff;
`;
const Container = styled.div`
  background-color: #fff;
  width: 370px;
  height: 160px;
  margin: 0px 0px 56px 20px;
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
      <Container>
        {storyIds.slice(0, 1).map((storyId, index) => (
          <TUser key={storyId} storyId={storyId} storyIds={storyIds} />
        ))}
      </Container>
    </Wrapper>
  );
};
