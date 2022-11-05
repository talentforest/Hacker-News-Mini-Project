import { useTheme } from "hooks/index";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [, toggleTheme] = useTheme();
  return (
    <HeaderTop>
      <Link to="/">
        <div>
          <img src={require("assets/logo.png")} alt="Logo" />
          <h1>Svelte Hacker News</h1>
        </div>
      </Link>
      <div>
        <img
          onClick={toggleTheme}
          src={require("assets/lightmode.png")}
          alt="light/dark mode"
        />
        <Link to="/about">
          <img
            className="question"
            src={require("assets/questionmark.png")}
            alt="question"
          />
        </Link>
      </div>
    </HeaderTop>
  );
};

const HeaderTop = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.header};
  height: 87px;
  padding: 44px 20px 7px;
  div {
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
  }
  div:nth-child(2) {
    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
      &:last-child {
        margin-left: 8px;
        margin-top: 3px;
      }
    }
  }
`;

export default Header;
