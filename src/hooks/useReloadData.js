import { useState, useCallback } from "react";

export function useReloadData(storyIds) {
  const [randomNumber, setRandomNumber] = useState([]);

  const reloadNewData = useCallback(() => {
    setRandomNumber(Math.floor(Math.random() * storyIds.length))
  }, [storyIds.length])

  return [randomNumber, reloadNewData]
}
