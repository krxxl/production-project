import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelectors } from '@/features/ArticleSortSelectors';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { Input } from '@/shared/ui/redesigned/Input';
import { OrderType } from '@/shared/types/types';
import { TabsItem } from '@/shared/ui/deprecated/Tabs';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: OrderType;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: OrderType) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (tab: TabsItem) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
        <ArticleTypeTabs
          type={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticleSortSelectors
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
