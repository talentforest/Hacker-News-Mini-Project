import styled from "styled-components";
import { Link } from 'react-router-dom';

const Username = ({ story, commentIds, replyIdData, replyReplyIdData }) => {
  return (
    <Link to={`/userprofile/${story?.by || replyIdData?.by || replyReplyIdData?.by || commentIds?.by}`} >
      <User>
        <img
          src={require("assets/user.png")}
          alt="logo"
        />
        <span>
          {story?.by || commentIds?.by || replyIdData?.by || replyReplyIdData?.by}
        </span>
      </User>
    </Link>
  )
}

const User = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  img {
    height: 20px;
    margin-right: 4px;
  }
`

export default Username;
