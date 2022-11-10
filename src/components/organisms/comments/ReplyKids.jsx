import { useEffect, useState } from "react";
import { getData } from "util/hnApi";
import { useToggle } from "hooks/index";
import UserClockFolder from "../../molecules/UserClockFolder";
import styled from "styled-components";

const ReplyKids = ({ replyKidsId }) => {
  const [replyKidsIdData, setReplyKidsIdData] = useState([]);
  const [toggle, onFolder] = useToggle();

  useEffect(() => {
    getData(replyKidsId, setReplyKidsIdData);
    return () => setReplyKidsIdData([]);
  }, [replyKidsId]);

  return (
    replyKidsIdData && (
      <Box>
        <UserClockFolder data={replyKidsIdData} onFolder={onFolder} />
        {toggle && (
          <Text dangerouslySetInnerHTML={{ __html: replyKidsIdData.text }} />
        )}
      </Box>
    )
  );
};

const Box = styled.div`
  width: 90%;
  margin: 7px 0px;
  margin-left: auto;
  padding-bottom: 12px;
  background-color: ${(props) => props.theme.container.default};
  color: ${(props) => props.theme.text.default};
`;
const Text = styled.p`
  background-color: ${(props) => props.theme.container.default};
  display: block;
  line-height: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export default ReplyKids;
