import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { THEMES, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import IconLight from 'shared/assets/icons/iconLight.svg';
import IconDark from 'shared/assets/icons/iconDark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string,
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toogleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toogleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === THEMES.LIGHT ? <IconLight /> : <IconDark />}
    </Button>
  );
};
