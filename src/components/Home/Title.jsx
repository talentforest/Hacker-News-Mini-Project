import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleBox>
      <h4>{title}</h4>
      <img src={require("assets/arrow_right_black.png")} alt="arrow" />
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
  > img {
    width: 7.5px;
    height: 12px;
    margin-left: 8.59px;
  }
`;

export default Title;
