import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { commentsSelectFields } from "../util/selectFields";
import { mapTime } from "../util/mapTime";

const Wrapper = styled.div`
  /* border: 1px solid red; */
  margin: 14px 0 14px 20px;
  background-color: ${(props) => props.theme.commentContainerColor};
  width: 330px;
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
    /* padding: 1px; */
    /* border: 1px solid red; */
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

export const ReplyReply = ({ replyReplyId }) => {
  // 댓글 접기 기능
  const [folder, setFolder] = useState(true);
  // 대대댓글 데이터
  const [replyReplyIdData, setReplyReplyIdData] = useState([]);

  const getReplyReplyData = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${replyReplyId}.json`)
      .then(({ data }) => data && commentsSelectFields(data));
    return result;
  };

  useEffect(() => {
    getReplyReplyData().then(
      (data) => data && data.type && setReplyReplyIdData(data)
    );
  }, []);

  const onClickfolder = (e) => {
    setFolder((prev) => (prev ? false : true));
  };

  return replyReplyIdData && replyReplyIdData.by ? (
    <Wrapper>
      <UserInfo>
        <Info>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user_black.png"
            alt="logo"
          />
          <span>{replyReplyIdData.by}</span>
          <img
            src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/clock.png"
            alt="clock"
          />
          <Gray>{mapTime(replyReplyIdData.time)}</Gray>
        </Info>
        <img
          onClick={onClickfolder}
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_up_gray.png"
          alt="arrow_up_gray"
        />
      </UserInfo>

      {folder ? (
        <ReplyComment
          dangerouslySetInnerHTML={{ __html: replyReplyIdData.text }}
        />
      ) : null}
    </Wrapper>
  ) : null;
};
