import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  view?: ArticleView;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ));

export const ArticleList = memo(({
  className,
  articles = [],
  view = ArticleView.SMALL,
  isLoading,
  target = '_self',
}: ArticleListProps) => {
  const { t } = useTranslation();

  const renderArticles = (article: Article) => (
    <ArticleListItem target={target} className={cls.card} key={article.id} view={view} article={article} />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Статей пока нет')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? (
        articles.map(renderArticles)
      ) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
