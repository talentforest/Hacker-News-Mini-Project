import { ArrowForwardIos } from "@material-ui/icons";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleBox>
      <h4>{title}</h4>
      <ArrowForwardIos />
    </TitleBox>
  );
};

const TitleBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  > h4 {
    color: ${(props) => props.theme.text.default};
    font-weight: 700;
    font-size: 24px;
  }
  > svg {
    width: 18px;
    height: 18px;
    margin-left: 8px;
    fill: ${(props) => props.theme.text.default};
  }
`;

export default Title;
