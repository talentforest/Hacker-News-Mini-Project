import { useState } from 'react';
import { ThemeContext } from './Context';
import { lightTheme, darkTheme } from '../theme/theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState('light');

  const theme = ThemeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={theme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}



