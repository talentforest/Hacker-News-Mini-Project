import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { commentsSelectFields } from "../../util/selectFields";
import { useToggle } from '../../hooks/index';
import UserClockFolder from './UserClockFolder';

export default function ReplyReply({ replyReplyId }) {
  const [toggle, onFolder] = useToggle();

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

  return replyReplyIdData && replyReplyIdData.by ? (
    <ReplyReplyWrapper>
      <UserClockFolder replyReplyIdData={replyReplyIdData} onFolder={onFolder} />
      {toggle ? (
        <ReplyComment
          dangerouslySetInnerHTML={{ __html: replyReplyIdData.text }}
        />
      ) : <></>}
    </ReplyReplyWrapper>
  ) : <></>;
};

const ReplyReplyWrapper = styled.div`
  margin: 14px 20px 14px 20px;
  background-color: ${(props) => props.theme.commentContainerColor};
  width: 320px;
  border-radius: 8px;
  padding: 0 12px 12px;
  color: ${(props) => props.theme.commentColor};
`;
const ReplyComment = styled.p`
  background-color: ${(props) => props.theme.commentContainerColor};
  display: block;
  line-height: 20px;
  word-wrap: break-word;
`;

