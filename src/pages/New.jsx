import { useViewModeChange } from "hooks/index";
import ViewModeBtn from "components/common/ViewModeBtn";
import NewTemplate from "components/Templates/NewTemplate";
import NewBoxModeTemplate from "components/Templates/NewBoxModeTemplate";

const New = () => {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <img src={require("assets/new_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <NewTemplate /> : <NewBoxModeTemplate />}
    </>
  );
};

export default New;
