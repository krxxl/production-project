import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <NavLink theme={NavLinkTheme.PRIMARY} to="/" className={cls.link}>
          {t('Главная')}
        </NavLink>
        <NavLink theme={NavLinkTheme.PRIMARY} to="/about" className={cls.link}>
          {t('О нас')}
        </NavLink>
      </div>
    </div>
  );
};
