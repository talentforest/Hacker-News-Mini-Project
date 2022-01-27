import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  padding: 0 20px;
  background-color: #fff;
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
  color: #727272;
`;
const List = styled.li`
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export default function Gnb() {
  return (
    <Navigation>
      <Lists>
        <Link to="/">
          <List>Home</List>
        </Link>
        <Link to="/top">
          <List>Top</List>
        </Link>
        <Link to="/new">
          <List>New</List>
        </Link>
        <Link to="/show">
          <List>Show</List>
        </Link>
        <Link to="/ask">
          <List>Ask</List>
        </Link>
        <Link to="/job">
          <List>Job</List>
        </Link>
      </Lists>
    </Navigation>
  );
}
