import { createContext } from 'react';

export enum THEMES {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE='app_orange_theme'
}

export interface ThemeContextProps {
  theme?: THEMES,
  setTheme?: (theme: THEMES) => void
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
