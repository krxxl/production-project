import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Calendar from 'shared/assets/icons/calendarIcon.svg';
import Eye from 'shared/assets/icons/eyeIcon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { fetchArticleDetailData } from '../../model/services/fetchArticleDetailData/fetchArticleDetailData';
import cls from './ArticleDetail.module.scss';
import { articleDetailReducer } from '../../model/slice/articleDetailSlice';
import { getArticleDetailError } from '../../model/selectors/getArticleDetailError/getArticleDetailError';
import { getArticleDetailData } from '../../model/selectors/getArticleDetailData/getArticleDetailData';

interface ArticleDetailProps {
  className?: string;
  id: string;
}
const defaultReducers: ReducersList = {
  articleDetail: articleDetailReducer,
};
export const ArticleDetail = memo(({ className, id }: ArticleDetailProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // const isLoading = useSelector(getArticleDetailIsLoading);
  const isLoading = true;
  const error = useSelector(getArticleDetailError);
  const data = useSelector(getArticleDetailData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleDetailData(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={34} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  }

  if (error) {
    content = <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title="Error" text={error} />;
  }

  if (data) {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={data.img} alt="avatar" className={cls.avatar} />
        </div>
        <Text title={data?.title} text={data?.subtitle} size={TextSize.SIZE_L} />
        <div className={cls.articleInfo}>
          <Icon Svg={Eye} className={cls.icon} />
          <Text text={data?.views?.toString()} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={Calendar} className={cls.icon} />
          <Text text={data.createdAt} />
        </div>
        {data?.blocks?.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetail, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});