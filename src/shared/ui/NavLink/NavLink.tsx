import {FC} from "react";
import cls from './NavLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";

export enum NavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface NavLinkProps extends LinkProps{
  className?: string,
  theme?: NavLinkTheme
}

export const NavLink: FC<NavLinkProps> = ({className, children, to, theme = NavLinkTheme.PRIMARY, ...otherProps}) => {
  return (
    <Link to={to} className={classNames(cls.NavLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
