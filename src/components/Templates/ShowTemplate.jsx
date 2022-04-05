import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import ListPagination from 'components/common/ListPagination';

const ShowTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <ListPagination storyIds={storyIds} />
  )
}

export default ShowTemplate;
