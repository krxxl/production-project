import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs as TabsDeprecated, TabsItem } from '@/shared/ui/deprecated/Tabs';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleType;
  onChangeType: (tab: TabsItem) => void;
}

export const ArticleTypeTabs = memo(
  ({ className, onChangeType, type }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const tabs = useMemo<TabsItem[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('Все'),
        },
        {
          value: ArticleType.IT,
          content: t('Айти'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Наука'),
        },
        {
          value: ArticleType.GEOGRAPHY,
          content: t('География'),
        },
      ],
      [t],
    );

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Tabs
            direction="column"
            tabs={tabs}
            value={type}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
          />
        }
        off={
          <TabsDeprecated
            className={classNames(cls.ArticleTypeTabs, {}, [className])}
            tabs={tabs}
            value={type}
            onTabClick={onChangeType}
          />
        }
      />
    );
  },
);
