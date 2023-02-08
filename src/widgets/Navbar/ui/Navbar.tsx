import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import {NavLink, NavLinkTheme} from "shared/ui/NavLink/NavLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <NavLink theme={NavLinkTheme.PRIMARY} to={'/'} className={cls.link}>Main</NavLink>
        <NavLink theme={NavLinkTheme.PRIMARY} to={'/about'} className={cls.link}>About</NavLink>
      </div>
    </div>
  );
};

