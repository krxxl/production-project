import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemesContext';
import { THEMES } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ThemeProviderProps {
  defTheme?: THEMES;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES;
const ThemeProvider = ({ children, defTheme }: ThemeProviderProps) => {
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<THEMES>(
    defTheme || fallbackTheme || THEMES.LIGHT,
  );

  useEffect(() => {
    if (!isThemeInited && defTheme) {
      document.body.className = defTheme;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, defTheme);
      setTheme(defTheme);
      setThemeInited(true);
    }
  }, [defTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
