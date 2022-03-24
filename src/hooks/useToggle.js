import { useState, useCallback } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(true);

  const onFolder = useCallback(() => {
    setToggle(!toggle);
  }, [setToggle, toggle]);

  return [toggle, onFolder]
}
