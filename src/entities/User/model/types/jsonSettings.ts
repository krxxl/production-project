import { THEMES } from '@/shared/const/theme';

export interface JsonSettings {
  theme?: THEMES;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpen?: boolean;

  isArticlesPageWasOpened?: boolean;
}
