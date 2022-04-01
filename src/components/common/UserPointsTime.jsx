import { mapTime } from "util/mapTime";
import styled from "styled-components";
import Username from 'components/common/Username';

const UserPointsTime = ({ story, style }) => {
  return (
    <User>
      <Username story={story} style={style} />
      <div>
        <span>{story.score} points</span>
        <span>{mapTime(story.time)}</span>
      </div>
    </User>
  )
}

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  > div:last-child {
    margin-left: 6px;
    display: flex;
    color: #949494;
    span:first-child {
      margin-right: 6px;
    }
  }
`;

export default UserPointsTime;
