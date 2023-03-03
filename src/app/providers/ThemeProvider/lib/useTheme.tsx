import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from './ThemesContext';

interface UseThemeResult {
  theme: THEMES,
  toogleTheme: () => void
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toogleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || THEMES.LIGHT,
    toogleTheme,
  };
}
