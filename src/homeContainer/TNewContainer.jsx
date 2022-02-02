import { useEffect, useState } from "react";
import { getNewStoryIds } from "../api/hnApi";
import { TNew } from "../homeComponents/TNew";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 572px;
  padding: 20px 20px 0px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

const Container = styled.div`
  background-color: #fff;
  height: 496px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 20px;
  margin: 0px auto 56px;
`;

export const TNewContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Container>
        {storyIds.slice(0, 6).map((storyId) => (
          <TNew key={storyId} storyId={storyId} />
        ))}
      </Container>
    </Wrapper>
  );
};
