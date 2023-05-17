import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Option, Select } from '@/shared/ui/deprecated/Select';
import { OrderType } from '@/shared/types/types';
import cls from './ArticleSortSelectors.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface ArticleSortSelectorsProps {
  className?: string;
  sort: ArticleSortField;
  order: OrderType;
  onChangeOrder: (newOrder: OrderType) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelectors = memo(
  ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  }: ArticleSortSelectorsProps) => {
    const { t } = useTranslation();

    const orderFieldOptions = useMemo<Option<ArticleSortField>[]>(
      () => [
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
      ],
      [t],
    );

    const orderOptions = useMemo<Option<OrderType>[]>(
      () => [
        {
          label: t('возрастанию'),
          value: 'asc',
        },
        {
          label: t('убыванию'),
          value: 'desc',
        },
      ],
      [t],
    );

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
              className,
            ])}
          >
            <VStack gap="8">
              <Text text={t('Сортировать по:')} />
              <ListBox
                items={orderFieldOptions}
                value={sort}
                onChange={onChangeSort}
              />
              <ListBox
                items={orderOptions}
                value={order}
                onChange={onChangeOrder}
              />
            </VStack>
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleSortSelectors, {}, [className])}
          >
            <Select
              value={sort}
              onChange={onChangeSort}
              options={orderFieldOptions}
              label={t('Сортировать по:')}
            />
            <Select
              value={order}
              onChange={onChangeOrder}
              label={t('по')}
              options={orderOptions}
            />
          </div>
        }
      />
    );
  },
);
