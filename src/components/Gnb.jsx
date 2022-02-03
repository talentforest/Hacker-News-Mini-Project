import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  color: ${(props) => props.theme.headerColor};
  &:hover {
    color: ${(props) => props.theme.headerHoverColor};
    cursor: pointer;
  }
`;
const CurrLocation = styled.div`
  position: absolute;
  top: 25px;
  background-color: #f9742e;
  width: 42px;
  height: 3px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export default function Gnb() {
  return (
    <Navigation>
      <Lists>
        <Link to="/">
          <List>Home</List>
          {/* condition ? <CurrLocation></CurrLocation> : null */}
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
