import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import SwiperPagination from 'components/common/ListPagination';

export default function TopTemplate() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <SwiperPagination storyIds={storyIds} />
  );
}


