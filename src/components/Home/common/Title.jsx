import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = ({ title }) => {
  return (
    <Container>
      <Link to={`${title.split(" ")[1].toLowerCase()}`}>
        <div>
          <h4>{title}</h4>
          <img
            src={require("assets/arrow_right_black.png")}
            alt="arrow"
          />
        </div>
      </Link>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0;
  div {
    padding: 0;
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    img {
      color: ${(props) => props.theme.svelteOrangeColor};
      width: 7.5px;
      height: 12px;
      margin-left: 8.59px;
      
    }
    img:first-child {
      width: 22px;
      height: 22px;
      margin-right: 3px;
    }
    span {
      font-size: 20px;
    }
  }
`

export default Title;

