import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
  ({ className, onSelect, size = 30, selectedStars = 0 }: StarRatingProps) => {
    const [curStarsCount, setCurStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (star: number) => () => {
      if (!isSelected) {
        setCurStarsCount(star);
      }
    };

    const onLeave = () => {
      if (!isSelected) {
        setCurStarsCount(0);
      }
    };

    const onClick = (star: number) => () => {
      if (!isSelected) {
        onSelect?.(star);
        setCurStarsCount(star);
        setIsSelected(true);
      }
    };

    return (
      <div
        className={classNames(
          toggleFeatures({
            name: 'isAppRedesigned',
            off: () => cls.StarRating,
            on: () => cls.StarRatingRedesigned,
          }),
          {},
          [className],
        )}
      >
        {stars.map((star) => {
          const props = {
            className: classNames(
              cls.starEmpty,
              { [cls.selected]: isSelected },
              [curStarsCount >= star ? cls.hovered : cls.normal],
            ),
            Svg: Star,
            width: size,
            height: size,
            key: star,
            onMouseEnter: onHover(star),
            onMouseLeave: onLeave,
            onClick: onClick(star),
            'data-testid': `StarRating.${star}`,
            'data-selected': curStarsCount >= star,
          };
          return (
            <ToggleFeatures
              feature="isAppRedesigned"
              on={<Icon clickable={!isSelected} {...props} />}
              off={<IconDeprecated {...props} />}
            />
          );
        })}
      </div>
    );
  },
);
