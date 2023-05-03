import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import IconLight from '@/shared/assets/icons/iconLight.svg';
import IconDark from '@/shared/assets/icons/iconDark.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { THEMES } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toogleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === THEMES.LIGHT ? <IconLight /> : <IconDark />}
    </Button>
  );
});
