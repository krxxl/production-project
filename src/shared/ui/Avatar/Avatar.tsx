import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import DefaultAvatar from '@/shared/assets/icons/avatar.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar = memo(
  ({ className, src, alt, size = 100, fallbackInverted }: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size],
    );

    return (
      <AppImage
        fallback={<Skeleton width={size} height={size} border="50%" />}
        errorFallback={
          <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={DefaultAvatar}
          />
        }
        alt={alt}
        src={src}
        style={styles}
        className={classNames(cls.Avatar, mods, [className])}
      />
    );
  },
);
