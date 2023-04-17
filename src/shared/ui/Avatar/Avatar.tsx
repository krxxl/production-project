import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number
}

export const Avatar = memo(({
  className, src, alt, size,
}: AvatarProps) => {
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
});
