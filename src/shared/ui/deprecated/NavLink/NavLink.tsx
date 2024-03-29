import React, { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavLink.module.scss';

export enum NavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface NavLinkProps extends LinkProps {
  className?: string;
  theme?: NavLinkTheme;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const NavLink = memo(
  ({
    className,
    children,
    to,
    theme = NavLinkTheme.PRIMARY,
    ...otherProps
  }: NavLinkProps) => (
    <Link
      to={to}
      className={classNames(cls.NavLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  ),
);
