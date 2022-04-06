import { useState, useCallback } from "react";

export function useButtonChange() {
  const [buttonMode, setButtonMode] = useState("submissions");

  const handleButtonMode = useCallback((mode) => {
    setButtonMode(mode);
  }, [setButtonMode]);

  return [buttonMode, handleButtonMode];
}
