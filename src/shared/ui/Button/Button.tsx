import {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  DARK= 'dark',
  LIGHT = 'light',
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ButtonTheme,
}

export const Button: FC<ButtonProps> = ({className, children, theme, ...otherProps}) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
