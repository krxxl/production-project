import React from 'react';
import { useSelector } from 'react-redux';
import { getJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => () => {
  const { theme: defaultTheme } = useSelector(getJsonSettings);

  return (
    <ThemeProvider defTheme={defaultTheme}>
      <Component />
    </ThemeProvider>
  );
};
