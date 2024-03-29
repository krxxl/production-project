import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextSize {
  SIZE_S = 'size-s',
  SIZE_M = 'size-m',
  SIZE_L = 'size-l',
}

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}
interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.SIZE_S]: 'h3',
  [TextSize.SIZE_M]: 'h2',
  [TextSize.SIZE_L]: 'h1',
};

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.SIZE_M,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    return (
      <div
        className={classNames(cls.Text, {}, [
          className,
          cls[theme],
          cls[align],
          cls[size],
        ])}
      >
        {title && (
          <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
