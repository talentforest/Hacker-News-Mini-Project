import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { TTopContainer } from "../container/TTopContainer";
import { TNewContainer } from "../container/TNewContainer";

const Section = styled.section`
  box-sizing: border-box;
  width: 390px;
  height: 640px;
`;

const Content = styled.div`
  /* border: 1px solid red; */
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 20px 0px;
  background-color: #fff;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  img {
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
  click: { rotate: [0, -180, 360], transition: { duration: 1 } },
};

export default function Home({}) {
  const now = new Date();
  const hours = now.getHours();
  return (
    <>
      <Header />
      <Gnb />
      <Banner src="img/home_banner.png" />
      {/* section으로 감싸야 할지 고민하기 */}
      <Content>
        <Title>
          <h4>Today's Top</h4>
          <img src="img/arrow_black.png" alt="arrow" />
        </Title>
        <Time>
          <img src="img/clock.png" alt="clock" />
          <span>{hours}:00</span>
        </Time>
      </Content>
      <TTopContainer />
      <Section>
        <Content>
          <Title>
            <h4>Today's New</h4>
            <img src="img/arrow_black.png" alt="arrow" />
          </Title>
          <Reload
            variants={ReloadVariants}
            whileTap="click"
            src="img/reloading.png"
            alt="reloading"
          />
        </Content>
        <TNewContainer />
      </Section>
      <Content>
        <Title>
          <h4>Today's User</h4>
          <img src="img/arrow_black.png" alt="arrow" />
        </Title>
        <Reload src="img/reloading.png" alt="reloading" />
      </Content>
    </>
  );
}
