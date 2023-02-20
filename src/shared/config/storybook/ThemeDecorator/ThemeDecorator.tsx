import { Story } from '@storybook/react';
import { ThemeProvider, THEMES } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent: Story) => (
  <ThemeProvider defTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
