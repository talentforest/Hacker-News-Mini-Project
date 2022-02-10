import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 390px;
  background-color: ${(props) => props.theme.backgroundLightGrayColor};
  padding: 29px 20px 32px;
`;
const Userprofile = styled.div`
  padding: 24px 16px;
  height: 332px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05), 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
const Username = styled.h5`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  height: 32px;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const UserInfo = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
`;
const Info = styled.span`
  height: 15px;
  width: 42px;
  padding: 2px 0 0 2px;
  border: 1px solid;
  border-radius: 8px;
  color: ${(props) => props.theme.svelteOrangeColor};
  margin-right: 5px;
  &:last-child {
    margin-left: 10px;
  }
`;
const Introduction = styled.p`
  color: ${(props) => props.theme.commentColor};
  line-height: 20px;
  font-size: 14px;
  word-break: break-all;
`;
const SortBtn = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.containerColor};
`;
const Btn = styled.button`
  width: 114px;
  height: 32px;
  border: none;
  border-radius: 16px;
  background-color: transparent;
  color: #b7b7b7;
  cursor: pointer;
`;
const PostBox = styled.div`
  width: 350px;
  height: 148px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 3px rgba(0, 0, 0, 0.05);
  color: ${(props) => props.theme.textColor};
  margin-bottom: 16px;
`;

export default function UserProfile({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Wrapper>
        <Userprofile>
          <Username>Username</Username>
          <UserInfo>
            <Info>Joined</Info>
            11 years ago
            <Info>Karma</Info>
            3423
          </UserInfo>
          <Introduction>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            dignissimos eius nobis! Nostrum dolor blanditiis officiis, eveniet
            nobis necessitatibus recusandae maiores qui laborum rerum obcaecati
            deserunt placeat ad modi assumenda!
          </Introduction>
        </Userprofile>
        <SortBtn>
          <Btn>submissions</Btn>
          <Btn>comments</Btn>
          <Btn>favorites</Btn>
        </SortBtn>
        <PostBox>1</PostBox>
      </Wrapper>
    </>
  );
}
