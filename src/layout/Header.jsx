import { Brightness4, ContactSupport } from "@material-ui/icons";
import { useTheme } from "hooks/index";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [, toggleTheme] = useTheme();
  const navigate = useNavigate();

  return (
    <HeaderTop>
      <Link to="/">
        <img src={require("assets/logo.png")} alt="Logo" />
        <h1>Svelte Hacker News</h1>
      </Link>
      <Icons>
        <Brightness4 onClick={toggleTheme} />
        <ContactSupport
          onClick={() => {
            navigate("/about");
          }}
        />
      </Icons>
    </HeaderTop>
  );
};

const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.header};
  height: 87px;
  padding: 44px 20px 7px;
  > a {
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
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    width: 22px;
    height: 22px;
    fill: #fff;
    &:last-child {
      width: 24px;
      height: 24px;
      margin-left: 5px;
    }
  }
`;

export default Header;
