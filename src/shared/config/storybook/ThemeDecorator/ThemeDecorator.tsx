import { Story } from '@storybook/react';
import { THEMES } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
