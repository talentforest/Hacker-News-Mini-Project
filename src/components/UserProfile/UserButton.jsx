import styled from "styled-components";

const UserButton = () => {
  return (
    <SortBtn>
      <button>submissions</button>
      <button>comments</button>
      <button>favorites</button>
    </SortBtn>
  );
}

const SortBtn = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 2222px;
  margin: 32px 0 20px;
  background-color: ${(props) => props.theme.containerColor};
  button {
    margin: 0 3px;
    width: 114px;
    height: 32px;
    border: none;
    border-radius: 16px;
    background-color: transparent;
    color: #b7b7b7;
    cursor: pointer;
    &:first-child {
      background-color: #ed702d;
      color: #fff;
    }
  }
`

export default UserButton;
