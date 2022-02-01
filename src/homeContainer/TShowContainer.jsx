import { useState, useEffect } from "react";
import styled from "styled-components";
import { TShow } from "../homeComponents/TShow";
import { getShowStoryIds } from "../api/hnApi";

const Container = styled.div`
  display: flex;
  width: 390px;
  height: 300px;
  overflow: scroll;
  padding: 20px 20px 56px 20px;
  background-color: #fff;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const TShowContainer = () => {
  // 글 목록값 상태관리
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Container>
      {storyIds.slice(0, 5).map((storyId, i) => (
        <TShow key={i} storyId={storyId} storyIds={storyIds} />
      ))}
    </Container>
  );
};
