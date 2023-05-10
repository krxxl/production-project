import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../../../shared/lib/context/ThemesContext';
import { THEMES } from '@/shared/const/theme';
import { getJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  defTheme?: THEMES;
  children: ReactNode;
}
const ThemeProvider = ({ children, defTheme }: ThemeProviderProps) => {
  const { theme: defaultTheme } = useSelector(getJsonSettings);
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<THEMES>(
    defaultTheme || THEMES.LIGHT || defTheme,
  );

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      document.body.className = defaultTheme;
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
