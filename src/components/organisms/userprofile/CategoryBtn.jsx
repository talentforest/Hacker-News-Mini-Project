import styled from "styled-components";

const CategoryBtn = ({ buttonMode, handleButtonMode }) => {
  return (
    <SortBtn>
      <Button
        onClick={() => handleButtonMode("submissions")}
        $selected={buttonMode === "submissions"}
      >
        submissions
      </Button>
      <Button
        onClick={() => handleButtonMode("comments")}
        $selected={buttonMode === "comments"}
      >
        comments
      </Button>
      <Button
        onClick={() => handleButtonMode("favorites")}
        $selected={buttonMode === "favorites"}
      >
        favorites
      </Button>
    </SortBtn>
  );
};

const SortBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.container.default};
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.$selected ? props.theme.text.orange : props.theme.container.default};
  color: ${(props) => (props.$selected ? "#fff" : props.theme.text.default)};
  margin: 0 3px;
  width: 33.3%;
  height: 32px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

export default CategoryBtn;
