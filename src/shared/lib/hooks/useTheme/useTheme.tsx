import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemesContext';
import { THEMES } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
  theme: THEMES,
  toogleTheme: () => void
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toogleTheme = () => {
    let newTheme:THEMES;
    switch (theme) {
    case THEMES.DARK:
      newTheme = THEMES.LIGHT;
      break;
    case THEMES.LIGHT:
      newTheme = THEMES.ORANGE;
      break;
    case THEMES.ORANGE:
      newTheme = THEMES.DARK;
      break;
    default:
      newTheme = THEMES.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || THEMES.LIGHT,
    toogleTheme,
  };
}
