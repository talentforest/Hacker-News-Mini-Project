import { AccountCircle } from "@material-ui/icons";
import { Skeleton } from "components/skeleton/SkeletonItem";
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
  return story ? (
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
      <AccountCircle />
      <span style={style}>
        {story?.by || commentIds?.by || replyIdData?.by || replyReplyIdData?.by}
      </span>
    </User>
  ) : (
    <User>
      <SkeletonUserIcon />
      <SkeletonUserName />
    </User>
  );
};

const User = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 20px;
    margin-right: 4px;
  }
  span {
    margin-right: 6px;
    color: ${(props) => props.theme.text.gray};
  }
`;

const SkeletonUserIcon = styled(Skeleton)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 4px;
`;

const SkeletonUserName = styled(Skeleton)`
  width: 50px;
  min-height: 15px;
`;

export default Username;
