import {LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES} from "./ThemesContext";
import {useContext} from "react";

interface UseThemeResult {
  theme: THEMES,
  toogleTheme: () => void
}
export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)
  const toogleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toogleTheme
  }
}