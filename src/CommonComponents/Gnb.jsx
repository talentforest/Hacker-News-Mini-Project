import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = styled.nav`
  padding: 0 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;
const Lists = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 700;
  box-sizing: border-box;
  padding-top: 1.8px;
  position: relative;
`;
const List = styled.li`
  width: 44px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.headerColor};
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
    cursor: pointer;
  }
`;
const CurrPageMark = styled.div`
  position: absolute;
  top: 26px;
  background-color: #f9742e;
  width: 42px;
  height: 3px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export default function Gnb() {
  const location = useLocation();

  return (
    <Navigation>
      <Lists>
        <Link to="/">
          <List>Home</List>
          {location.pathname === "/" ? <CurrPageMark /> : null}
        </Link>
        <Link to="/top">
          <List>Top</List>
          {location.pathname === "/top" || "/top/users" ? (
            <CurrPageMark />
          ) : null}
        </Link>
        <Link to="/new">
          <List>New</List>
          {location.pathname === "/new" ? <CurrPageMark /> : null}
        </Link>
        <Link to="/show">
          <List>Show</List>
          {location.pathname === "/show" ? <CurrPageMark /> : null}
        </Link>
        <Link to="/ask">
          <List>Ask</List>
          {location.pathname === "/ask" ? <CurrPageMark /> : null}
        </Link>
        <Link to="/job">
          <List>Job</List>
          {location.pathname === "/job" ? <CurrPageMark /> : null}
        </Link>
      </Lists>
    </Navigation>
  );
}
