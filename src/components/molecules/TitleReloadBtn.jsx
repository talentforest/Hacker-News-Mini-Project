import Title from "../common/Title";
import styled from "styled-components";
import { useState } from "react";
import { Replay } from "@material-ui/icons";

const TitleReloadBtn = ({ title, setNum, length }) => {
  const [rotate, setRotate] = useState(false);

  const onClick = () => {
    setNum(Math.abs(Math.floor(Math.random() * length - 5)));
    setRotate(true);
    setTimeout(() => setRotate(false), 300);
  };

  return (
    <Header>
      <Title title={title} />
      <Reload onClick={onClick} className={rotate ? "rotate" : ""} />
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reload = styled(Replay)`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.text.gray};
  background-color: #fff;
  border-radius: 50%;
  padding: 2px;
  width: 40px;
  height: 40px;
  fill: ${(props) => props.theme.text.default};
  &:hover {
    transition: transform ease 0.3s;
    transform: scale(1.1);
  }
  &.rotate {
    animation: rotate-keyframes 0.3s;
  }
  @keyframes rotate-keyframes {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

export default TitleReloadBtn;
