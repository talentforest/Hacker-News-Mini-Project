import { useEffect, useState } from "react";
import styled from "styled-components";
import { getReplyReplyData } from '../../util/hnApi';
import { useToggle } from '../../hooks/index';
import UserClockFolder from './UserClockFolder';

export default function ReplyReply({ replyReplyId }) {
  const [replyReplyIdData, setReplyReplyIdData] = useState([]);

  const [toggle, onFolder] = useToggle();

  useEffect(() => {
    getReplyReplyData(replyReplyId, setReplyReplyIdData);
  }, [replyReplyId]);

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

