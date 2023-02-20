import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M ='size-m',
  L ='size-l',
  XL='size-xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  theme?: ButtonTheme,
  square?: boolean,
  size?: ButtonSize,
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M, ...otherProps
}) => {
  const mods = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      data-testid="button"
      type="button"
      className={classNames(
        cls.Button,
        mods,
        [className, cls[theme]],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
