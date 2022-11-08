import { useViewModeChange } from "hooks/index";
import { getNewStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import ViewModeBtn from "components/common/ViewModeBtn";
import { Banner } from "./Home";
import SwiperPagination from "components/template/SwiperPagination";

const New = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <Banner src={require("assets/new_banner.png")} alt="banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default New;
