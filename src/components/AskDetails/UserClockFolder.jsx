import { mapTime } from "../../util/mapTime";
import styled from "styled-components";

export default function UserClockFolder({ commentIds, replyIdData, replyReplyIdData, onFolder }) {
  return (
    <CommentInfo>
      <div>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/user.png"
          alt="logo"
        />
        {commentIds ?
          <span>{commentIds.by}</span> : replyIdData ?
            <span>{replyIdData.by}</span> : replyReplyIdData ?
              <span>{replyReplyIdData.by}</span> : <></>}
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/clock.png"
          alt="clock"
        />
        {commentIds ?
          <span>{mapTime(commentIds.time)}</span> : replyIdData ?
            <span>{mapTime(replyIdData.time)}</span> : replyReplyIdData ?
              <span>{mapTime(replyReplyIdData.time)}</span> : <></>}
      </div>
      <FolderBtn
        onClick={onFolder}
        src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_up_gray.png"
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
