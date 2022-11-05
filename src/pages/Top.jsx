import { useViewModeChange } from "hooks/index";
import ViewModeBtn from "components/common/ViewModeBtn";
import TopTemplate from "components/Templates/TopTemplate";
import TopBoxModeTemplate from "components/Templates/TopBoxModeTemplate";

const Top = () => {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <img src={require("assets/top_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <TopTemplate /> : <TopBoxModeTemplate />}
    </>
  );
};

export default Top;
