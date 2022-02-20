import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import { TopUsersBox } from "../PostComponents/TopUsersBox";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 28px 0 21px;
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
  color: ${(props) => props.theme.textColor};
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
  color: #fff;
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
  color: #fff;
`;

export default function TopUsers({ toggleDark }) {
  const location = useLocation();
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/top_banner.png" />
      <Wrapper>
        <Btn>
          <Link to="/top">
            <PostBtn>Post</PostBtn>
            {location.pathname === "/top" ? <CurrBtn /> : null}
          </Link>
          <Link to="/top/users">
            <UsersBtn>Users</UsersBtn>
            {location.pathname === "/top/users" ? <CurrUsersBtn /> : null}
          </Link>
        </Btn>
      </Wrapper>
      <TopUsersBox />
    </>
  );
}
