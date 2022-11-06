import { useViewModeChange } from "hooks/index";
import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import ListPagination from "components/common/ListPagination";
import BoxPagination from "components/common/BoxPagination";
import ViewModeBtn from "components/common/ViewModeBtn";

const Show = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <img src={require("assets/show_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? (
        <ListPagination storyIds={storyIds} />
      ) : (
        <BoxPagination storyIds={storyIds} />
      )}
    </>
  );
};

export default Show;
