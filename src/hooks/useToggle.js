import { useState, useCallback } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(true);

  const onFolder = useCallback(() => {
    setToggle((prev) => (prev ? false : true));
  }, [setToggle]);

  return [toggle, onFolder]
}
