import styled from "styled-components";
import Title from "./Title";

const TitleClock = ({ title }) => {
  const now = new Date();
  const hours = now.getHours();

  return (
    <Header>
      <Title title={title} />
      <Clock>
        <img src={require("assets/clock.png")} alt="clock" />
        <span>{hours}:00</span>
      </Clock>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text.default};
`;

const Clock = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 22px;
    height: 22px;
  }
  > span {
    font-size: 20px;
    font-weight: 700;
    margin-left: 3px;
  }
`;

export default TitleClock;
