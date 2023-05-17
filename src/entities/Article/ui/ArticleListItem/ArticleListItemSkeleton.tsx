import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });
    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(mainClass, {}, [className, cls.big])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={50} height={16} className={cls.date} />
            </div>
            <Skeleton width="100%" height={24} className={cls.title} />
            <Skeleton width={115} className={cls.types} />
            <Skeleton width="100%" height={180} className={cls.image} />
            <Skeleton width="100%" height={200} className={cls.desc} />
            <div className={cls.footer}>
              <Skeleton width={60} height={40} />
              <Skeleton width={40} className={cls.views} />
              <Skeleton width={16} height={16} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, cls.small])}>
        <Card className={cls.card}>
          <div className={cls.imgWrapper}>
            <Skeleton width={200} height={200} className={cls.image} />
            <Skeleton width={50} height={16} className={cls.date} />
          </div>
          <div className={cls.info}>
            <Skeleton width={115} className={cls.types} />
            <Skeleton width={40} className={cls.views} />
            <Skeleton width={16} height={16} />
          </div>
          <Skeleton width={200} className={cls.title} />
        </Card>
      </div>
    );
  },
);
