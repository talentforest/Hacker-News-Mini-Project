import styled from "styled-components";
import { useTheme } from '../../hooks/useTheme';
import { Link } from "react-router-dom";

const HeaderTop = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackgroundColor};
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
  cursor: pointer;
  width: 24px;
  height: 24px;
  &:last-child {
    margin-left: 8px;
  }
`;

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <HeaderTop>
      <Link to="/">
        <Title>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/logo.png"
            alt="Logo"
          />
          <h1>Svelte Hacker News</h1>
        </Title>
      </Link>
      <div>
        <Icon
          onClick={toggleTheme}
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/lightmode.png"
          alt="light/dark mode"
        />
        <Link to="/about">
          <Icon
            className="question"
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/questionmark.png"
            alt="question"
          />
        </Link>
      </div>
    </HeaderTop>
  );
}
