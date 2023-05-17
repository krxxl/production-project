import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/deprecated/Card';
import cls from './ArticlePageFilters.module.scss';
import { ArticleSortSelectors } from '@/features/ArticleSortSelectors';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(
  ({ className }: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const {
      search,
      sort,
      onChangeSearch,
      onChangeSort,
      onChangeType,
      type,
      onChangeOrder,
      order,
      view,
      onViewClick,
    } = useArticleFilters();

    return (
      <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelectors
            sort={sort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onViewClick} />
        </div>
        <Card className={cls.search}>
          <Input
            onChange={onChangeSearch}
            value={search}
            placeholder={t('Поиск')}
          />
        </Card>
        <ArticleTypeTabs
          type={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
      </div>
    );
  },
);
