import { useTheme } from 'hooks/index';
import { Link } from "react-router-dom";
import { imgBaseUrl } from "util/Constant";
import styled from "styled-components";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <HeaderTop>
      <Link to="/Hacker-News-Mini-Project">
        <div>
          <img
            src={`${imgBaseUrl}assets/logo.png`}
            alt="Logo"
          />
          <h1>Svelte Hacker News</h1>
        </div>
      </Link>
      <div>
        <img
          onClick={toggleTheme}
          src={`${imgBaseUrl}lightmode.png`}
          alt="light/dark mode"
        />
        <Link to="/Hacker-News-Mini-Project/about">
          <img
            className="question"
            src={`${imgBaseUrl}questionmark.png`}
            alt="question"
          />
        </Link>
      </div>
    </HeaderTop>
  );
}

const HeaderTop = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBackgroundColor};
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
