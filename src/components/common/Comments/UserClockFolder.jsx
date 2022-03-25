import { mapTime } from "util/mapTime";
import { imgBaseUrl } from 'util/Constant';
import styled from "styled-components";

const UserClockFolder = ({ commentIds, replyIdData, replyReplyIdData, onFolder }) => {
  return (
    <CommentInfo>
      <div>
        <img
          src={`${imgBaseUrl}user.png`}
          alt="logo"
        />
        {commentIds ?
          <span>{commentIds.by}</span> : replyIdData ?
            <span>{replyIdData.by}</span> : replyReplyIdData ?
              <span>{replyReplyIdData.by}</span> : <></>}
        <img
          src={`${imgBaseUrl}clock.png`}
          alt="clock"
        />
        {commentIds ?
          <span>{mapTime(commentIds.time)}</span> : replyIdData ?
            <span>{mapTime(replyIdData.time)}</span> : replyReplyIdData ?
              <span>{mapTime(replyReplyIdData.time)}</span> : <></>}
      </div>
      <FolderBtn
        onClick={onFolder}
        src={`${imgBaseUrl}arrow_up_gray.png`}
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
  div {
    padding: 30px 0 20px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
    span {
      margin-right: 6px;
    }
    span:nth-child(4) { 
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
