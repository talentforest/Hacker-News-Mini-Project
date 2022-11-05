import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Username = ({
  style,
  story,
  commentIds,
  replyIdData,
  replyReplyIdData,
}) => {
  const navigator = useNavigate();
  return (
    <User
      role="link"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        navigator(
          `/userprofile/${
            story?.by ||
            replyIdData?.by ||
            replyReplyIdData?.by ||
            commentIds?.by
          }`
        );
      }}
      style={{ cursor: "pointer" }}
    >
      <img src={require("assets/user.png")} alt="logo" />
      <span style={style}>
        {story?.by || commentIds?.by || replyIdData?.by || replyReplyIdData?.by}
      </span>
    </User>
  );
};

const User = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 20px;
    margin-right: 4px;
  }
  span {
    margin-right: 6px;
    color: ${(props) => props.theme.text.gray};
  }
`;

export default Username;
