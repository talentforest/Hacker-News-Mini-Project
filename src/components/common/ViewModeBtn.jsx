import { ReactComponent as List } from "assets/list-solid.svg";
import { ReactComponent as BoxList } from "assets/th-large-solid.svg";
import styled from "styled-components";

const ViewModeBtn = ({ viewMode, handleViewMode }) => {
  return (
    <ViewMode>
      <ListView
        $selected={viewMode === "list-mode"}
        onClick={() => handleViewMode("list-mode")}
      />
      <BoxView
        $selected={viewMode === "box-mode"}
        onClick={() => handleViewMode("box-mode")}
      />
    </ViewMode>
  );
};

const ViewMode = styled.div`
  margin-top: -3px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background.default};
  svg {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ListView = styled(List)`
  fill: ${(props) =>
    props.$selected ? props.theme.text.default : props.theme.text.lightGray};
`;

const BoxView = styled(BoxList)`
  fill: ${(props) =>
    props.$selected ? props.theme.text.default : props.theme.text.lightGray};
`;

export default ViewModeBtn;
