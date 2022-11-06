import Title from "./Title";
import styled from "styled-components";
import { useState } from "react";

const TitleReloadBtn = ({ title, reloadData }) => {
  const [rotate, setRotate] = useState(false);

  const onClick = () => {
    reloadData();
    setRotate(true);
    setTimeout(() => setRotate(false), 300);
  };

  return (
    <Header>
      <Title title={title} />
      <Reload
        src={require("assets/reloading.png")}
        alt="reloading"
        onClick={onClick}
        className={rotate ? "rotate" : ""}
      />
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reload = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
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
      transform: rotate(360deg);
    }
  }
`;

export default TitleReloadBtn;
