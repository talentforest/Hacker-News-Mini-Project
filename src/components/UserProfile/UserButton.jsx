import styled from "styled-components";

const activeStyles = {
  color: "#fff",
  backgroundColor: "#ed702d"
};

const UserButton = ({ buttonMode, handleButtonMode }) => {
  return (
    <SortBtn>
      <button
        onClick={() => handleButtonMode("submissions")}
        style={buttonMode === "submissions" ? activeStyles : {}}
      >
        submissions
      </button>
      <button
        onClick={() => handleButtonMode("comments")}
        style={buttonMode === "comments" ? activeStyles : {}}
      >
        comments
      </button>
      <button
        onClick={() => handleButtonMode("favorites")}
        style={buttonMode === "favorites" ? activeStyles : {}}
      >
        favorites
      </button>
    </SortBtn >
  );
}

const SortBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.containerColor};
  button {
    background-color: transparent;
    margin: 0 3px;
    width: 33.3%;
    height: 32px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }
`

export default UserButton;

