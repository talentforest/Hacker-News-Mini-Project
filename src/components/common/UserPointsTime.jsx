import { mapTime } from "util/mapTime";
import styled from "styled-components";
import Username from 'components/common/Username';

const UserPointsTime = ({ story }) => {
  return (
    <User>
      <Username story={story} />
      <UserInfo>
        <span>{story.score} points</span>
        <span>{mapTime(story.time)}</span>
      </UserInfo>
    </User>
  )
}

const User = styled.div`
  display: flex;
  align-items: center;
`;
const UserInfo = styled.div`
  margin-left: 6px;
  display: flex;
  color: #949494;
  span:first-child {
    margin-right: 6px;
  }
`;

export default UserPointsTime;
