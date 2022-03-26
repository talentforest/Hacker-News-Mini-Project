import { mapTime } from "util/mapTime";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import User from '../User';

const UserClockFolder = ({ commentIds, replyIdData, replyReplyIdData, onFolder }) => {
  return (
    <CommentInfo>
      <div>
        {commentIds ?
          <Link to={`/userprofile/${commentIds?.by}`}>
            <User commentIds={commentIds} />
          </Link> : <></>}
        {replyIdData ?
          <Link to={`/userprofile/${replyIdData?.by}`}>
            <User replyIdData={replyIdData} />
          </Link> : <></>}
        {replyReplyIdData ?
          <Link to={`/userprofile/${replyReplyIdData?.by}`}>
            <User replyReplyIdData={replyReplyIdData} />
          </Link> : <></>}
        <img
          src={"/assets/clock.png"}
          alt="clock"
        />
        {commentIds ?
          <span>{mapTime(commentIds.time)}</span> : replyIdData ?
            <span>{mapTime(replyIdData.time)}</span> : replyReplyIdData ?
              <span>{mapTime(replyReplyIdData.time)}</span> : <></>}
      </div>
      <FolderBtn
        onClick={onFolder}
        src={"/assets/arrow_up_gray.png"}
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
