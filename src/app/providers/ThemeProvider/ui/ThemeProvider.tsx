import React, { ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemesContext';
import { THEMES } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES
  || THEMES.LIGHT;

interface ThemeProviderProps {
  defTheme?: THEMES,
  children: ReactNode,
}
const ThemeProvider = ({ children, defTheme } : ThemeProviderProps) => {
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
