import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Option, Select } from '@/shared/ui/Select';
import { OrderType } from '@/shared/types/types';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelectors.module.scss';

interface ArticleSortSelectorsProps {
  className?: string;
  sort: ArticleSortField;
  order: OrderType;
  onChangeOrder: (newOrder: OrderType) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelectors = memo(({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorsProps) => {
  const { t } = useTranslation();

  const orderFieldOptions = useMemo<Option<ArticleSortField>[]>(() => [
    {
      label: t('Названию'),
      value: ArticleSortField.TITLE,
    },
    {
      label: t('Дате'),
      value: ArticleSortField.CREATED,
    },
    {
      label: t('Просмотрам'),
      value: ArticleSortField.VIEWS,
    },
  ], [t]);

  const orderOptions = useMemo<Option<OrderType>[]>(() => [
    {
      label: t('возрастанию'),
      value: 'asc',
    },
    {
      label: t('убыванию'),
      value: 'desc',
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelectors, {}, [className])}>
      <Select value={sort} onChange={onChangeSort} options={orderFieldOptions} label={t('Сортировать по:')} />
      <Select value={order} onChange={onChangeOrder} label={t('по')} options={orderOptions} />
    </div>
  );
});
