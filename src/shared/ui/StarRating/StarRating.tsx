import { memo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
  className?: string,
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
export const StarRating = memo(({
  className,
  onSelect,
  size = 30,
  selectedStars = 0,
}: StarRatingProps) => {
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
    <div className={classNames('', {}, [className])}>
      {stars.map((star) => (
        <Icon
          className={classNames(
            cls.starEmpty,
            { [cls.selected]: isSelected },
            [curStarsCount >= star ? cls.hovered : cls.normal],
          )}
          width={size}
          height={size}
          key={star}
          Svg={Star}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
        />
      ))}
    </div>
  );
});
