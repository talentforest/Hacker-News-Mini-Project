import styled from "styled-components";

const Wrapper = styled.section`
  width: 390px;
`;
const Title = styled.h4`
  display: block;
  width: 390px;
  font-size: 20px;
  font-weight: 700;
  margin: 0 20px 18px;
`;
const Table = styled.div`
  width: 390px;
  height: 44px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  color: #727272;
  font-weight: 500;
  background-color: #eaf4f8;
  box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
`;

export const UsersArea = () => {
  return (
    <Wrapper>
      <Title>User Ranking 🏆</Title>
      <Table>
        <span>Rank</span>
        <span>User Name</span>
        <span>Karma</span>
      </Table>
    </Wrapper>
  );
};
