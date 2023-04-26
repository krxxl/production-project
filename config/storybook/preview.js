import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
  RouterDecorator,
} from '../../src/shared/config/storybook/RouterDeacorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { THEMES } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: THEMES.LIGHT, color: '#f8fbfc' },
      { name: 'dark', class: THEMES.DARK, color: '#151617' },
      { name: 'orange', class: THEMES.ORANGE, color: '#ea640f' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(THEMES.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
