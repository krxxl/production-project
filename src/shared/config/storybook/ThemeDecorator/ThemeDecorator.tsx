import { Story } from '@storybook/react';
// eslint-disable-next-line krxxl-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { THEMES } from '@/shared/const/theme';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent: Story) =>
  (
    <ThemeProvider defTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
