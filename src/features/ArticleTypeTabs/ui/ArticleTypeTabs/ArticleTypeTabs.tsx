import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs, TabsItem } from '@/shared/ui/Tabs';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    type: ArticleType;
    onChangeType: (tab: TabsItem) => void;
}

export const ArticleTypeTabs = memo(({
  className,
  onChangeType,
  type,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const tabs = useMemo<TabsItem[]>(() => [
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
  ], [t]);

  return (
    <Tabs
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
      tabs={tabs}
      value={type}
      onTabClick={onChangeType}
    />

  );
});
