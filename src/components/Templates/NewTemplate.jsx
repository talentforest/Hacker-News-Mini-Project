import { useEffect, useState } from "react";
import { getNewStoryIds } from "util/hnApi";
import SwiperPagination from 'components/common/ListPagination';


const NewTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <SwiperPagination storyIds={storyIds} />
  )
}

export default NewTemplate;
