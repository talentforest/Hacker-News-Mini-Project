import { useViewModeChange } from "hooks/index";
import ViewModeBtn from "components/common/ViewModeBtn";
import ShowTemplate from "components/Templates/ShowTemplate";
import ShowBoxModeTemplate from "components/Templates/ShowBoxModeTemplate";

const Show = () => {
  const [viewMode, handleViewMode] = useViewModeChange();

  return (
    <>
      <img src={require("assets/show_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? <ShowTemplate /> : <ShowBoxModeTemplate />}
    </>
  );
};

export default Show;
