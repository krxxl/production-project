import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  DARK= 'dark',
  LIGHT = 'light',
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ButtonTheme,
}

export const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => (
  <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </button>
);
