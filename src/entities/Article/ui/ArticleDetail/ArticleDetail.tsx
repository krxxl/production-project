import React, { memo, useCallback, useEffect } from 'react';
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
import { HStack, VStack } from 'shared/ui/Stack';
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
        <HStack max justify="center" gap="16">
          <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        </HStack>
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
        <HStack max justify="center" gap="16">
          <Avatar size={200} src={data.img} alt="avatar" />
        </HStack>
        <VStack gap="8" max>
          <Text title={data?.title} text={data?.subtitle} size={TextSize.SIZE_L} />
          <HStack gap="8">
            <Icon Svg={Eye} />
            <Text text={data?.views?.toString()} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={Calendar} />
            <Text text={data.createdAt} />
          </HStack>
        </VStack>
        {data?.blocks?.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <VStack gap="16" className={classNames(cls.ArticleDetail, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
