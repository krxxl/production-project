import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  fullWidth = false,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
      className,
      cls[theme],
    ])}
    {...otherProps}
  >
    {children}
  </div>
);
