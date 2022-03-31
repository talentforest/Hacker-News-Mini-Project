import { mapTime } from "util";

const Clock = ({ commentIds, replyIdData, replyReplyIdData }) => {
  return (
    <>
      <img
        src={require("assets/clock.png")}
        alt="clock"
      />
      {commentIds ?
        <span>{mapTime(commentIds.time)}</span> : replyIdData ?
          <span>{mapTime(replyIdData.time)}</span> : replyReplyIdData ?
            <span>{mapTime(replyReplyIdData.time)}</span> : <></>}
    </>
  )
}

export default Clock;
