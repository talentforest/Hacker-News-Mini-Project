import { ReactComponent as List } from "assets/list-solid.svg";
import { ReactComponent as BoxList } from "assets/th-large-solid.svg";
import styled from "styled-components";

const ViewModeBtn = ({ viewMode, handleViewMode }) => {
  return (
    <ViewMode>
      <div>
        <List
          width="22"
          height="22"
          fill={viewMode === "list-mode" ? "#333" : "#c5c5c5"}
          onClick={() => handleViewMode("list-mode")}
        />
      </div>
      <div>
        <BoxList
          width="22"
          height="22"
          fill={viewMode === "box-mode" ? "#333" : "#c5c5c5"}
          onClick={() => handleViewMode("box-mode")}
        />
      </div>
    </ViewMode >
  );
};

const ViewMode = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  background-color: ${(props) => props.theme.backgroundGrayColor};
  div {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default ViewModeBtn;
