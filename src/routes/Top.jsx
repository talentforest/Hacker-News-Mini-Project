import Header from "../CommonComponents/Header";
import Gnb from "../CommonComponents/Gnb";
import Banner from "../CommonComponents/Banner";
import TopToggleBtn from "../CommonComponents/TopToggleBtn";
import { TopPostContainer } from "../PostContainer/TopPostContainer";
import { SortViewModeBtn } from "../CommonComponents/SortBtn";
import { TopCardPostContainer } from "../PostContainer/TopCardPostContainer";
import styled from "styled-components";

const SortView = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const Sort = styled.div`
  display: flex;
  margin-left: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 22px;
    background-color: #fff;
    border: 0.5px solid #dfdfdf;
    font-size: 12px;
    margin-right: 6px;
    border-radius: 20px;
  }
  img {
    width: 8px;
    margin-left: 4px;
  }
`;
const View = styled.div`
  padding-right: 20px;
  img {
    width: 24px;
    margin-left: 9px;
    cursor: pointer;
  }
`;

export default function Top({ toggleDark }) {
  const listView = (e) => {
    return <TopPostContainer />;
  };

  const cardView = (e) => {
    return <TopCardPostContainer />;
  };

  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/top_banner.png" />
      <TopToggleBtn />
      <SortViewModeBtn />
      <TopPostContainer />
    </>
  );
}
