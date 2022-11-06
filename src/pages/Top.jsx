import { useViewModeChange } from "hooks/index";
import ViewModeBtn from "components/common/ViewModeBtn";
import SwiperPagination from "components/common/ListPagination";
import { getTopStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import BoxPagination from "components/common/BoxPagination";

const Top = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <img src={require("assets/top_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      {viewMode === "list-mode" ? (
        <SwiperPagination storyIds={storyIds} />
      ) : (
        <BoxPagination storyIds={storyIds} />
      )}
    </>
  );
};

export default Top;
