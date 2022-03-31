import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import { Container } from './Title';

const TitleReloadBtn = ({ title, reloadNewData }) => {
  return (
    <Container>
      <Title title={title} />
      <Reload
        variants={ReloadVariants}
        whileTap="click"
        src={require("assets/reloading.png")}
        alt="reloading"
        onClick={reloadNewData}
      />
    </Container>
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
