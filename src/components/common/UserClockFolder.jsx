import Username from 'components/common/Username';
import Clock from 'components/common/Clock';
import styled from "styled-components";

const UserClockFolder = ({ commentIds, replyIdData, replyReplyIdData, onFolder }) => {
  return (
    <CommentInfo>
      <div>
        <Username
          commentIds={commentIds}
          replyIdData={replyIdData}
          replyReplyIdData={replyReplyIdData}
        />
        <Clock
          commentIds={commentIds}
          replyIdData={replyIdData}
          replyReplyIdData={replyReplyIdData}
        />
      </div>
      <FolderBtn
        onClick={onFolder}
        src={require("assets/arrow_up_gray.png")}
        alt="arrow_up_gray"
      />
    </CommentInfo>

  )
}

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  > div {
    padding: 20px 0 10px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 2px;
      }
      span {
        margin-right: 6px;
        color: #333;
      }
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
    span {
      color: #727272;
    }
  }
`;
const FolderBtn = styled.img`
  padding: 2px;
  width: 20px;
  height: 12.41px;
  cursor: pointer;
`

export default UserClockFolder;
