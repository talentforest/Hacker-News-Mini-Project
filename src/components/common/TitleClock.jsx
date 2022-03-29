import Title from './Title';
import { Link } from 'react-router-dom';
import { Container } from './Title';

const TitleClock = ({ title }) => {
  const now = new Date();
  const hours = now.getHours();

  return (
    <Container>
      <Link to="top">
        <Title title={title} />
      </Link>
      <div>
        <img
          src={"assets/clock.png"}
          alt="clock"
        />
        <span>{hours}:00</span>
      </div>
    </Container>
  );
};

export default TitleClock;
