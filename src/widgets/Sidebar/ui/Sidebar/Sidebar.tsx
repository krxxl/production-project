import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { TranslateSwitcher } from 'shared/ui/TranslateSwitcher/TranslateSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink';
import About from 'shared/assets/icons/abouts.svg';
import Main from 'shared/assets/icons/main.svg';
import { RoutePath } from 'shared/config/router/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onCollapsedHandler = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <div className={cls.links}>
        <NavLink theme={NavLinkTheme.PRIMARY} to={RoutePath.main} className={cls.link}>
          <Main className={cls.icon} />
          <span className={cls.title}>{t('Главная')}</span>
        </NavLink>
        <NavLink theme={NavLinkTheme.PRIMARY} to={RoutePath.about} className={cls.link}>
          <About className={cls.icon} />
          <span className={cls.title}>{t('О нас')}</span>
        </NavLink>
      </div>
      <Button
        data-testid="collapsed"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        onClick={onCollapsedHandler}
        className={cls.sidebarBtn}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <TranslateSwitcher short={collapsed} className={cls.translate} />
      </div>
    </div>
  );
};
