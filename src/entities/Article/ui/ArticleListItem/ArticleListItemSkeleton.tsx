import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls.big])}>
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
    <div className={classNames(cls.ArticleListItem, {}, [className, cls.small])}>
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
});
