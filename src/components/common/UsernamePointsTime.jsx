import { Link } from "react-router-dom";
import styled from "styled-components";
import { mapTime } from "util";

const UsernamePointsTime = ({ story }) => {
  return (
    <User>
      <Link to={`/userprofile/${story.by}`}>
        <span>{story.by}</span>
      </Link>
      <span>{story.score} points</span>
      <span>{mapTime(story.time)}</span>
    </User>
  );
};

const User = styled.div`
  display: flex;
  align-items: baseline;
  span:first-child {
    font-size: 12px;
    font-weight: 400;
  }
  span {
    margin: 14px 8px 0 0;
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.text.lightGray};
  }
`;

export default UsernamePointsTime;
