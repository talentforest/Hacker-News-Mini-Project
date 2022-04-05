import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import BoxPagination from 'components/common/BoxPagination';

const ShowBoxModeTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return <BoxPagination storyIds={storyIds} />;
}

export default ShowBoxModeTemplate;
