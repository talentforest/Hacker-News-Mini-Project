import { useEffect, useState } from "react";
import { getNewStoryIds } from "../api/hnApi";
import { TNew } from "../components/TNew";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 496px;
  margin: 20px auto 56px;
  padding: 0px 20px 0px 20px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const TNewContainer = () => {
  // 글 목록값 상태관리
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Container>
      {storyIds.slice(0, 6).map((storyId) => (
        <TNew key={storyId} storyId={storyId} />
      ))}
    </Container>
  );
};
