import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  padding: 28px 0 21px;
  /* border: 1px solid red; */
`;
const Btn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: auto;
  height: 40px;
  border-radius: 30px;
  border: 1px solid #dfdfdf;
  background-color: ${(props) => props.theme.containerColor};
`;
const PostBtn = styled.button`
  position: relative;
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: ${(props) => props.color};
  cursor: pointer;
  z-index: 1;
`;
const UsersBtn = styled.button`
  position: relative;
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: ${(props) => props.color};
  cursor: pointer;
  z-index: 1;
`;

const CurrBtn = styled.div`
  position: absolute;
  width: 171px;
  height: 32px;
  border-radius: 20px;
  border: none;
  background-color: #ed702d;
  left: 3px;
  top: 3px;
`;
const CurrUsersBtn = styled.div`
  position: absolute;
  width: 171px;
  height: 32px;
  border-radius: 20px;
  border: none;
  background-color: #ed702d;
  right: 3px;
  top: 3px;
`;

export default function TopToggleBtn({ toggleDark }) {
  const location = useLocation();

  return (
    <Wrapper>
      <Btn>
        <Link to="/top">
          <PostBtn color="#b7b7b7">Post</PostBtn>
          {location.pathname === "/top" ? <CurrBtn /> : null}
        </Link>
        <Link to="/top/users">
          <UsersBtn color="#b7b7b7">Users</UsersBtn>
          {location.pathname === "/top/users" ? <CurrUsersBtn /> : null}
        </Link>
      </Btn>
    </Wrapper>
  );
}
