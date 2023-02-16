import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])} />
);
