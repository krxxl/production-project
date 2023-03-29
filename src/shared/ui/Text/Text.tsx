import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY= 'primary',
  INVERTED='inverted',
  ERROR='error'
}

export enum TextSize {
  SIZE_M='size-m',
  SIZE_L='size-l',
}

export enum TextAlign {
  CENTER='center',
  LEFT='left',
  RIGHT='right'
}
interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.SIZE_M,
}: TextProps) => (
  <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
));
