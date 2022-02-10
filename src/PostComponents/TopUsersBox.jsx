import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { getJobStoryIds, getTopStory } from "../util/hnApi";
import { userSelectFields } from "../util/selectFields";

const Wrapper = styled.section`
  width: 390px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 22px 0 72px;
`;
const Title = styled.h4`
  display: block;
  width: 390px;
  font-size: 20px;
  font-weight: 700;
  margin: 0 20px 18px;
  color: ${(props) => props.theme.textColor};
`;
const Table = styled.div`
  width: 390px;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #727272;
  font-weight: 500;
  box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
  &:nth-child(2n) {
    background-color: #eaf4f8;
    color: #202020;
  }
  &:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.userRankOddBoxColor};
    color: ${(props) => props.theme.textColor};
  }
  h6,
  span {
    width: 33.3%;
    text-align: center;
  }
  h6 {
    color: #727272;
  }
`;

export const TopUsersBox = ({ toggleDark }) => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Title>User Ranking 🏆</Title>
      <Table>
        <h6>Rank</h6>
        <h6>User Name</h6>
        <h6>Karma</h6>
      </Table>
      {storyIds.slice(0, 50).map((storyId, index) => (
        <Table key={storyId} storyId={storyId}>
          <span>{index + 1}</span>
          <span>Username</span>
          <span>Karma</span>
        </Table>
      ))}
    </Wrapper>
  );
};
