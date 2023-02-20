import React, { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  THEMES,
  ThemeContext,
} from '../lib/ThemesContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES
  || THEMES.LIGHT;

interface ThemeProviderProps {
  defTheme?: THEMES
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children, defTheme }) => {
  const [theme, setTheme] = useState<THEMES>(defTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
