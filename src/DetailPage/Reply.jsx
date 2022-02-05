import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { commentsSelectFields } from "../util/selectFields";

const Wrapper = styled.div`
  background-color: #777;
`;

export const Reply = ({ replyId }) => {
  // 대댓글 데이터
  const [replyIdData, setReplyIdData] = useState([]);
  const getReplyData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${replyId}.json`)
      .then(({ data }) => data && commentsSelectFields(data));
    console.log(result);
    return result;
  };

  useEffect(() => {
    getReplyData().then((data) => data && data.type && setReplyIdData(data));
  }, []);

  console.log(replyIdData);

  return <Wrapper>{replyIdData.by}</Wrapper>;
};
