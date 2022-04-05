import { useEffect, useState } from "react";
import { getTopStoryIds } from 'util/hnApi';
import BoxPagination from 'components/common/BoxPagination';

const TopBoxModeTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <BoxPagination storyIds={storyIds} />
  )
}

export default TopBoxModeTemplate;
