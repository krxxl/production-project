import {createContext} from "react";

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: THEMES,
  setTheme?: (theme: THEMES) => void
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';