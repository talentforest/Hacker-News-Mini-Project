import { useViewModeChange } from "hooks/index";
import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import ViewModeBtn from "components/atom/ViewModeBtn";
import SwiperPagination from "components/template/SwiperPagination";
import BannerBox from "components/atom/Banner";

const Show = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <BannerBox
        imgPath={require("assets/show_banner.png")}
        page="Show banner"
      />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default Show;
