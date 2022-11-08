import { useViewModeChange } from "hooks/index";
import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import ViewModeBtn from "components/common/ViewModeBtn";
import SwiperPagination from "template/SwiperPagination";

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
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default Show;
