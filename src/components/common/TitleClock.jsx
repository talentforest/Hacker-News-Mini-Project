import styled from "styled-components";
import { Content } from './Title';

const TitleClock = ({ title }) => {
  const now = new Date();
  const hours = now.getHours();
  return (
    <NewContent>
      <div>
        <h4>{title}</h4>
        <img
          src={"assets/arrow_right_black.png"}
          alt="arrow"
        />
      </div>
      <div>
        <img
          src={"assets/clock.png"}
          alt="clock"
        />
        <span>{hours}:00</span>
      </div>
    </NewContent>
  );
};

const NewContent = styled(Content)`
  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    line-height: 2px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
    span {
      font-size: 20px;
      color: ${(props) => props.theme.textGrayColor};
    }
  }
`;

export default TitleClock;
