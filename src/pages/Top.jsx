import { useViewModeChange } from "hooks/index";
import { getTopStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import { Banner } from "./Home";
import ViewModeBtn from "components/atom/ViewModeBtn";
import SwiperPagination from "components/template/SwiperPagination";

const Top = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/top_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default Top;
