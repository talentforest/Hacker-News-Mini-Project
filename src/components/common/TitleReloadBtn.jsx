import styled from "styled-components";
import { motion } from "framer-motion";
import { Content } from './Title';

const TitleReloadBtn = ({ title, reloadNewData }) => {
  return (
    <Content>
      <div>
        <h4>{title}</h4>
        <img
          src={"assets/arrow_right_black.png"}
          alt="arrow"
        />
      </div>
      <Reload
        variants={ReloadVariants}
        whileTap="click"
        src={"assets/reloading.png"}
        alt="reloading"
        onClick={reloadNewData}
      />
    </Content>
  );
};

const Reload = styled(motion.img)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const ReloadVariants = {
  click: { rotateZ: 360, duration: 2 },
};

export default TitleReloadBtn;
