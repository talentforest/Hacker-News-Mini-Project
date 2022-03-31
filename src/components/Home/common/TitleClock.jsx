import Title from './Title';
import { Container } from './Title';

const TitleClock = ({ title }) => {
  const now = new Date();
  const hours = now.getHours();

  return (
    <Container>
      <Title title={title} />
      <div>
        <img
          src={require("assets/clock.png")}
          alt="clock"
        />
        <span>{hours}:00</span>
      </div>
    </Container>
  );
};

export default TitleClock;
