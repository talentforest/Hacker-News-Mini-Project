import { useEffect, useState } from "react";
import { getStoryIds } from "../api/hnApi";
import { Story } from "../components/Story";

export const StoryContainer = () => {
  // 글 목록값 상태관리
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};
