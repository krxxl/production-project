import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';

interface ArticleListProps {
  className?: string;
  view?: ArticleView;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(
  ({
    className,
    articles = [],
    view = ArticleView.SMALL,
    isLoading,
    target = '_self',
  }: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticles = (article: Article) => (
      <ArticleListItem
        target={target}
        className={cls.card}
        key={article.id}
        view={view}
        article={article}
      />
    );

    if (!isLoading && !articles.length) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text title={t('Статей пока нет')} />
        </div>
      );
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <HStack
            wrap="wrap"
            gap="16"
            className={classNames(cls.ArticleListRedesigned, {}, [])}
            data-testid="ArticleList"
          >
            {articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={item.id}
                className={cls.card}
              />
            ))}
            {isLoading && getSkeletons(view)}
          </HStack>
        }
        off={
          <div
            data-testid="ArticleList"
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            {articles.length ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
          </div>
        }
      />
    );
  },
);
