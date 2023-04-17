import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  border?: string;
}

export const Skeleton = memo(({
  className,
  border,
  height,
  width,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    >
      <div />
    </div>
  );
});
