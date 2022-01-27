import styled from "styled-components";

const HeaderTop = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #ed702d;
  height: 87px;
  color: #fff;
  font-weight: 700;
  padding: 0 20px 7px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
  &:last-child {
    margin-left: 8px;
  }
`;

export default function Header() {
  return (
    <HeaderTop>
      <Title>
        <Img src="img/logo.png" alt="Logo" />
        Svelte Hacker News
      </Title>
      <div>
        <Img src="img/lightmode.png" alt="light/dark mode" />
        <Img className="question" src="img/questionmark.png" alt="question" />
      </div>
    </HeaderTop>
  );
}
