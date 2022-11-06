import Username from "components/common/Username";
import Clock from "components/common/comments/Clock";
import styled from "styled-components";
import { KeyboardArrowUp } from "@material-ui/icons";

const UserClockFolder = ({
  commentIds,
  replyIdData,
  replyReplyIdData,
  onFolder,
  story,
}) => {
  return (
    <CommentInfo>
      <div>
        <Username
          story={story}
          commentIds={commentIds}
          replyIdData={replyIdData}
          replyReplyIdData={replyReplyIdData}
        />
        <Clock
          story={story}
          commentIds={commentIds}
          replyIdData={replyIdData}
          replyReplyIdData={replyReplyIdData}
        />
      </div>
      <FolderBtn onClick={onFolder} />
    </CommentInfo>
  );
};

const CommentInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  > div {
    padding: 20px 0 10px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
    span {
      color: ${(props) => props.theme.text.gray};
    }
  }
`;
const FolderBtn = styled(KeyboardArrowUp)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default UserClockFolder;
