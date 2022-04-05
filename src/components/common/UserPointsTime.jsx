import { mapTime } from "util/mapTime";
import Username from 'components/common/Username';

const UserPointsTime = ({ story, style }) => {
  return (
    <>
      <Username story={story} style={style} />
      <div>
        <span>{story.score} points</span>
        <span>{mapTime(story.time)}</span>
      </div>
    </>
  )
}

export default UserPointsTime;
