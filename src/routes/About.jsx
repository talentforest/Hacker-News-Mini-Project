import styled from "styled-components";
import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";

const Wrapper = styled.section`
  width: 390px;
  background-color: ${(props) => props.theme.containerGrayColor};
`;
const Userprofile = styled.div`
  padding: 20px;
  height: 332px;
  background-color: ${(props) => props.theme.containerColor}; ;
`;
const SortBtn = styled.button``;

export default function About({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Wrapper>
        <Userprofile></Userprofile>
        <SortBtn></SortBtn>
      </Wrapper>
    </>
  );
}
