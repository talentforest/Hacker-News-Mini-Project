import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderTop = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  /* background-color: #ed702d; */
  height: 87px;
  padding: 44px 20px 7px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  &:last-child {
    margin-left: 8px;
  }
`;

export default function Header({ toggleDark }) {
  return (
    <HeaderTop>
      <Link to="/">
        <Title>
          <img src="img/logo.png" alt="Logo" />
          <h1>Svelte Hacker News</h1>
        </Title>
      </Link>
      <div>
        <Icon
          onClick={toggleDark}
          src="img/lightmode.png"
          alt="light/dark mode"
        />
        <Icon className="question" src="img/questionmark.png" alt="question" />
      </div>
    </HeaderTop>
  );
}
