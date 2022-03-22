import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { commentsSelectFields } from "../../util/selectFields";
import ReplyReply from "./ReplyReply";
import { useToggle } from '../../hooks/index';
import UserClockFolder from './UserClockFolder';

export default function Reply({ replyId }) {
  const [toggle, onFolder] = useToggle();
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
