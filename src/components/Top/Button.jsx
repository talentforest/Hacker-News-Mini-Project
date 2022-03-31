import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Button = () => {
  const pathname = useLocation().pathname;
  return (
    <Btn>
      <Link to="/top">
        <PostBtn>Post</PostBtn>
        {pathname === "/top" ? <CurrBtn /> : <></>}
      </Link>
      <Link to="/user">
        <UsersBtn>Users</UsersBtn>
        {pathname === "/user" ? <CurrUsersBtn /> : <></>}
      </Link>
    </Btn>
  )
}

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
  color: ${(props) => props.theme.toggleBtnTextColor};
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
  color: ${(props) => props.theme.toggleBtnTextColor};
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

export default Button;
