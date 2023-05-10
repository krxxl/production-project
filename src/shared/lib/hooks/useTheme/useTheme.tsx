import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemesContext';
import { THEMES } from '../../../const/theme';

interface UseThemeResult {
  theme: THEMES;
  toogleTheme: (saveAction?: (theme: THEMES) => void) => void;
}
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toogleTheme = (saveAction?: (theme: THEMES) => void) => {
    let newTheme: THEMES;
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
    saveAction?.(newTheme);
  };

  return {
    theme: theme || THEMES.LIGHT,
    toogleTheme,
  };
}
