import styled from "styled-components";

const EmptyBox = ({ title }) => {
  return <Box>{title}</Box>;
};

const Box = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.text.lightGray};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export default EmptyBox;
