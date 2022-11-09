import { AccountCircle } from "@material-ui/icons";
import { Skeleton } from "components/skeleton/SkeletonItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Username = ({ by }) => {
  const navigator = useNavigate();

  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigator(`/userprofile/${by}`);
  };

  return by ? (
    <User role="link" onClick={onClick}>
      <AccountCircle />
      <span>{by}</span>
    </User>
  ) : (
    <User>
      <SkeletonUserIcon />
      <SkeletonUserName />
    </User>
  );
};

const User = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.default};
  svg {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
`;

const SkeletonUserIcon = styled(Skeleton)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 2px;
`;

const SkeletonUserName = styled(Skeleton)`
  width: 50px;
  min-height: 15px;
`;

export default Username;
