import { useEffect, useState } from "react";
import { getNewStoryIds } from 'util/hnApi';
import BoxPagination from 'components/common/BoxPagination';

const NewBoxModeTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return <BoxPagination storyIds={storyIds} />;
}

export default NewBoxModeTemplate;
