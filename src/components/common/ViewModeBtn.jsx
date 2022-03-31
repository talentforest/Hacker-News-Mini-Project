import { useState } from "react";
import { ReactComponent as List } from "assets/list-solid.svg";
import { ReactComponent as BoxList } from "assets/th-large-solid.svg";
import styled from "styled-components";

const ViewModeBtn = () => {
  const [viewMode, setViewMode] = useState(false);

  const handleViewMode = () => {
    setViewMode(!viewMode);
  }

  return (
    <ViewMode>
      <div>
        <List
          width="22"
          height="22"
          fill={viewMode ? "#333" : "#c5c5c5"}
          onClick={handleViewMode}
        />
      </div>
      <div>
        <BoxList
          width="22"
          height="22"
          fill={viewMode ? "#c5c5c5" : "#333"}
          onClick={handleViewMode}
        />
      </div>
    </ViewMode >
  );
};

const ViewMode = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 30px;
  background-color: #f5f5f5;
  div {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export default ViewModeBtn;
