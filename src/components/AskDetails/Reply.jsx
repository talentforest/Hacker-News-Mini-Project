import { useEffect, useState } from "react";
import { useToggle } from '../../hooks/index';
import { getReplyData } from '../../util/hnApi';
import ReplyReply from "./ReplyReply";
import UserClockFolder from './UserClockFolder';
import styled from "styled-components";

const Reply = ({ replyId }) => {
  const [toggle, onFolder] = useToggle();
  const [replyIdData, setReplyIdData] = useState([]);

  useEffect(() => {
    getReplyData(replyId, setReplyIdData);
  }, [replyId]);

  const replyReplyIds = replyIdData.kids;

  return replyIdData && replyIdData.by ? (
    <>
      <ReplyWrapper>
        <UserClockFolder replyIdData={replyIdData} onFolder={onFolder} />
        {toggle ? (
          <ReplyComment
            dangerouslySetInnerHTML={{ __html: replyIdData.text }}
          />
        ) : null}
      </ReplyWrapper>
      {toggle
        ? replyReplyIds?.map((replyReplyId, i) => (
          <ReplyReply key={replyReplyId} replyReplyId={replyReplyId} />
        ))
        : <></>}
    </>
  ) : <></>;
};

const ReplyWrapper = styled.div`
  margin-top: 14px;
  background-color: ${(props) => props.theme.commentContainerColor};
  width: 340px;
  border-radius: 8px;
  padding: 0 12px 12px;
  color: ${(props) => props.theme.commentColor};
`
const ReplyComment = styled.p`
  background-color: ${(props) => props.theme.commentContainerColor};
  display: block;
  line-height: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export default Reply;
