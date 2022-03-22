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
  const pathname = location.pathname;

  return (
    <Navigation>
      <Lists>
        <Link to="/">
          <List>Home</List>
          {pathname === "/" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/top">
          <List>Top</List>
          {pathname === "/top" || "/top/users" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/new">
          <List>New</List>
          {pathname === "/new" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/show">
          <List>Show</List>
          {pathname === "/show" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/ask">
          <List>Ask</List>
          {pathname === "/ask" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/job">
          <List>Job</List>
          {pathname === "/job" ? <CurrPageMark /> : <></>}
        </Link>
      </Lists>
    </Navigation>
  );
}
