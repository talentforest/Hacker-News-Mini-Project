import { useContext, useCallback } from "react";
import { ThemeContext } from '../context/Context';

export function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === "light") {
      setThemeMode("dark");
    }
    else {
      setThemeMode("light")
    };
  }, [ThemeMode, setThemeMode]);

  return [ThemeMode, toggleTheme];
}
