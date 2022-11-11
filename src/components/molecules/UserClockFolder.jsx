import Username from "components/atom/Username";
import styled from "styled-components";
import { KeyboardArrowUp } from "@material-ui/icons";
import { useState } from "react";
import TimeBox from "components/atom/TimeBox";

const UserClockFolder = ({ data, onFolder }) => {
  const [rotate, setRotate] = useState(false);
  const onClick = () => {
    onFolder();
    setRotate((prev) => !prev);
  };

  return (
    <CommentInfo>
      <Username by={data?.by} />
      <TimeBox time={data?.time} />
      <KeyboardArrowUp onClick={onClick} className={rotate ? "rotate" : ""} />
    </CommentInfo>
  );
};

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
  svg {
    fill: ${(props) => props.theme.text.lightGray};
    margin-left: auto;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:last-child {
      width: 24px;
      height: 24px;
      fill: ${(props) => props.theme.text.default};
    }
    &:hover {
      transition: transform ease 0.3s;
      transform: scale(1.2);
    }
    &.rotate {
      transition: transform ease 0.3s;
      transform: rotate(180deg);
    }
  }
`;

export default UserClockFolder;
