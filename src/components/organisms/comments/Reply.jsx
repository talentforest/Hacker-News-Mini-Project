import { useEffect, useState } from "react";
import { useToggle } from "hooks/index";
import { getData } from "util/hnApi";
import ReplyKids from "./ReplyKids";
import UserClockFolder from "../../molecules/UserClockFolder";
import styled from "styled-components";

const Reply = ({ replyId }) => {
  const [toggle, onFolder] = useToggle();
  const [replyIdData, setReplyIdData] = useState([]);

  useEffect(() => {
    getData(replyId, setReplyIdData);
    return () => setReplyIdData([]);
  }, [replyId]);

  return replyIdData?.by ? (
    <ReplyBox>
      <UserClockFolder data={replyIdData} onFolder={onFolder} />
      {toggle && (
        <>
          <ReplyComment
            dangerouslySetInnerHTML={{ __html: replyIdData.text }}
          />
          {replyIdData.kids?.map((replyKidsId) => (
            <ReplyKids key={replyKidsId} replyKidsId={replyKidsId} />
          ))}
        </>
      )}
    </ReplyBox>
  ) : (
    <></>
  );
};

const ReplyBox = styled.div`
  margin: 7px 0;
  width: 95%;
  padding-bottom: 12px;
  background-color: ${(props) => props.theme.container.default};
  color: ${(props) => props.theme.text.default};
`;

const ReplyComment = styled.p`
  display: block;
  line-height: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export default Reply;
