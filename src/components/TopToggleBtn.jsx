import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 390px;
  height: 81px;
  padding: 24px 0 17px;
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
`;

const PostBtn = styled.button`
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #b7b7b7;
  cursor: pointer;
  z-index: 1;
`;
const UsersBtn = styled.button`
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #b7b7b7;
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
  left: 2px;
`;
const Container = styled.div`
  padding-top: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default function TopToggleBtn({ toggleDark }) {
  return (
    <Wrapper>
      <Btn>
        <Link to="/top">
          <PostBtn>Post</PostBtn>
        </Link>
        <Link to="/top/users">
          <UsersBtn>Users</UsersBtn>
        </Link>
      </Btn>
    </Wrapper>
  );
}
