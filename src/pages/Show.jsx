import { useViewModeChange } from "hooks/index";
import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import ViewModeBtn from "components/atom/ViewModeBtn";
import SwiperPagination from "components/template/SwiperPagination";
import { Banner } from "./Home";

const Show = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/show_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default Show;
