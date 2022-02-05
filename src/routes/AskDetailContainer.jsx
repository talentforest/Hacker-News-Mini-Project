import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getComment } from "../api/hnApi";
import { AskDetail } from "../DetailPage/AskDetail";
import { commentsSelectFields } from "../util/selectFields";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 390px;
  height: 869px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const AskDetailContainer = ({ toggleDark }) => {
  const { id } = useParams();

  const [currIdData, setCurrIdData] = useState([]);
  // kids 배열 데이터 얻기
  const getCurrIdData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => data && commentsSelectFields(data));

    return result;
  };

  useEffect(() => {
    getCurrIdData().then((data) => setCurrIdData(data));
  }, []);
  const commentIdsArr = currIdData.kids;
  // console.log(commentIdsArr); // kids의 commentId값들을 얻었음

  // console.log(commentIds);

  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/ask_banner.png" />
      <Wrapper>
        {commentIdsArr?.slice(0, 16).map((commentId) => (
          <AskDetail key={commentId} commentId={commentId} />
        ))}
      </Wrapper>
    </>
  );
};
