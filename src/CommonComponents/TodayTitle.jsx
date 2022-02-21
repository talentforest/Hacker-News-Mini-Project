import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled.div`
  /* border: 1px solid red; */
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 20px 0px;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.div`
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  img {
    color: ${(props) => props.theme.svelteOrangeColor};
    width: 7.5px;
    height: 12px;
    margin-left: 8.59px;
  }
`;
const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  line-height: 2px;
  color: #b7b7b7;
  img {
    width: 20px;
    height: 20px;
    margin-right: 1.67px;
  }
`;
const Reload = styled(motion.img)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const ReloadVariants = {
  click: { rotateZ: 360, duration: 2 },
};

export const OnlyTitle = ({ title }) => {
  return (
    <Content>
      <Title>
        <h4>{title}</h4>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_black.png"
          alt="arrow"
        />
      </Title>
    </Content>
  );
};

export const ClockTitle = ({ title }) => {
  const now = new Date();
  const hours = now.getHours();
  return (
    <Content>
      <Title>
        <h4>{title}</h4>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_black.png"
          alt="arrow"
        />
      </Title>
      <Time>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/clock.png"
          alt="clock"
        />
        <span>{hours}:00</span>
      </Time>
    </Content>
  );
};

export const ReloadTitle = ({ title, reloadNewData }) => {
  return (
    <Content>
      <Title>
        <h4>{title}</h4>
        <img
          src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_right_black.png"
          alt="arrow"
        />
      </Title>
      <Reload
        variants={ReloadVariants}
        whileTap="click"
        src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/reloading.png"
        alt="reloading"
        onClick={reloadNewData}
      />
    </Content>
  );
};
