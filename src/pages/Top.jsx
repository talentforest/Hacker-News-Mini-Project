import { useViewModeChange } from "hooks/index";
import { getTopStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import ViewModeBtn from "components/atom/ViewModeBtn";
import SwiperPagination from "components/template/SwiperPagination";
import BannerBox from "components/atom/Banner";

const Top = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <BannerBox imgPath={require("assets/top_banner.png")} page="top banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default Top;
