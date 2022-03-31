import Username from 'components/common/Username';
import Clock from 'components/common/Comments/Clock';
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
      color: ${(props) => props.theme.textGrayColor};
    }
  }
`;
const FolderBtn = styled.img`
  padding-top: 5px;
  width: 20px;
  height: 12.41px;
  cursor: pointer;
`

export default UserClockFolder;
