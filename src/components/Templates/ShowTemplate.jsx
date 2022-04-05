import { useEffect, useState } from "react";
import { getShowStoryIds } from "util/hnApi";
import SwiperPagination from 'components/common/SwiperPagination';

const ShowTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getShowStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <SwiperPagination storyIds={storyIds} />
  )
}

export default ShowTemplate;
