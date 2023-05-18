import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import Calendar from '@/shared/assets/icons/calendarIcon.svg';
import Eye from '@/shared/assets/icons/eyeIcon.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { fetchArticleDetailData } from '../../model/services/fetchArticleDetailData/fetchArticleDetailData';
import cls from './ArticleDetail.module.scss';
import { articleDetailReducer } from '../../model/slice/articleDetailSlice';
import { getArticleDetailError } from '../../model/selectors/getArticleDetailError/getArticleDetailError';
import { getArticleDetailData } from '../../model/selectors/getArticleDetailData/getArticleDetailData';
import { renderArticleBlock } from './renderBlock';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { getArticleDetailIsLoading } from '../../model/selectors/getArticleDetailIsLoading/getArticleDetailIsLoading';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailProps {
  className?: string;
  id?: string;
}
const defaultReducers: ReducersList = {
  articleDetail: articleDetailReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailData);
  return (
    <>
      <HStack max justify="center" gap="16">
        <Avatar size={200} src={article?.img} alt="avatar" />
      </HStack>
      <VStack gap="8" max data-testid="ArticleDetails.Info">
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.SIZE_L}
        />
        <HStack gap="8">
          <Icon Svg={Eye} />
          <TextDeprecated text={article?.views?.toString()} />
        </HStack>
        <HStack gap="8">
          <Icon Svg={Calendar} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks?.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailData);

  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height={420} border="16px" />
        }
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks?.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetail = memo(({ className, id }: ArticleDetailProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailIsLoading);
  // const isLoading = true;
  const error = useSelector(getArticleDetailError);
  const data = useSelector(getArticleDetailData);

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

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
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            border="50%"
          />
        </HStack>
        <Skeleton width={300} height={24} />
        <Skeleton className={cls.skeleton} width={600} height={34} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  }

  if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title="Error"
        text={error}
      />
    );
  }

  if (data) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <VStack
        gap="16"
        max
        className={classNames(cls.ArticleDetail, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
