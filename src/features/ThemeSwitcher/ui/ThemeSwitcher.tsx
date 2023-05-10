import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import IconLight from '@/shared/assets/icons/iconLight.svg';
import IconDark from '@/shared/assets/icons/iconDark.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { THEMES } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toogleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toogleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleHandler}
      className={classNames('', {}, [className])}
    >
      {theme === THEMES.LIGHT ? <IconLight /> : <IconDark />}
    </Button>
  );
});
