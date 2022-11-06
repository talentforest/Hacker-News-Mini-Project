import { useViewModeChange } from "hooks/index";
import ViewModeBtn from "components/common/ViewModeBtn";
import SwiperPagination from "components/common/ListPagination";
import { getNewStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import BoxPagination from "components/common/BoxPagination";

const New = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <img src={require("assets/new_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? (
        <SwiperPagination storyIds={storyIds} />
      ) : (
        <BoxPagination storyIds={storyIds} />
      )}
    </>
  );
};

export default New;
