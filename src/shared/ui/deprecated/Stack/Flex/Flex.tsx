import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'start' | 'end';
type FlexJustify = 'center' | 'start' | 'end' | 'space';
type FlexDirection = 'row' | 'column';
type FlexGap = '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  space: cls.justifySpace,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, any> = {
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export interface FlexProps extends DivProps {
  className?: string;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  // max: boolean;
  gap?: FlexGap;
  children: ReactNode;
  max?: boolean;
}

export const Flex = ({
  className,
  align = 'center',
  max,
  justify = 'start',
  direction = 'row',
  gap,
  children,
  ...otherProps
}: FlexProps) => {
  const clsNames = [
    className,
    alignClasses[align],
    justifyClasses[justify],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };
  return (
    <div className={classNames(cls.Flex, mods, clsNames)} {...otherProps}>
      {children}
    </div>
  );
};
