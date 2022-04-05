import { useState, useCallback } from "react";

export function useViewModeChange() {
  const [viewMode, setViewMode] = useState("list-mode");

  const handleViewMode = useCallback((mode) => {
    setViewMode(mode);
  }, [setViewMode]);

  return [viewMode, handleViewMode];
}
