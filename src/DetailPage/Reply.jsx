import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { commentsSelectFields } from "../util/selectFields";
import { mapTime } from "../util/mapTime";
import { ReplyReply } from "./ReplyReply";

export const Reply = ({ replyId }) => {
  const [folder, setFolder] = useState(true);
  const [replyIdData, setReplyIdData] = useState([]);

  const getReplyData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${replyId}.json`)
      .then(({ data }) => data && commentsSelectFields(data));
    return result;
  };

  useEffect(() => {
    getReplyData().then((data) => data && data.type && setReplyIdData(data));
  }, []);

  const replyReplyIds = replyIdData.kids;

  const onClickfolder = (e) => {
    setFolder((prev) => (prev ? false : true));
  };

  return replyIdData && replyIdData.by ? (
    <>
      <Wrapper>
        <UserInfo>
          <Info>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user_black.png"
              alt="logo"
            />
            <span>{replyIdData.by}</span>
            <img
              src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/clock.png"
              alt="clock"
            />
            <Gray>{mapTime(replyIdData.time)}</Gray>
          </Info>
          <img
            onClick={onClickfolder}
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_up_gray.png"
            alt="arrow_up_gray"
          />
        </UserInfo>

        {folder ? (
          <ReplyComment
            dangerouslySetInnerHTML={{ __html: replyIdData.text }}
          />
        ) : null}
      </Wrapper>
      {folder
        ? replyReplyIds?.map((replyReplyId, i) => (
          <ReplyReply key={replyReplyId} replyReplyId={replyReplyId} />
        ))
        : <></>}
    </>
  ) : <></>;
};

const Wrapper = styled.div`
  margin-top: 14px;
  background-color: ${(props) => props.theme.commentContainerColor};
  width: 350px;
  border-radius: 8px;
  padding: 0 12px 12px;
  color: ${(props) => props.theme.commentColor};
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  font-size: 14px;
  font-weight: 400;
  img {
    cursor: pointer;
    padding: 2px;
    width: 20px;
    height: 12.41px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  img:first-child {
    width: 20px;
    height: 20px;
    margin: 0 6px 0 0;
  }
  img {
    width: 13px;
    height: 13px;
    margin: 0 6px 0 10px;
  }
  span:first-child {
    color: #b7b7b7;
  }
`;
const Gray = styled.span`
  padding-top: 2px;
  color: #727272;
`;
const ReplyComment = styled.p`
  background-color: ${(props) => props.theme.commentContainerColor};
  display: block;
  line-height: 20px;
  word-wrap: break-word;
`;
