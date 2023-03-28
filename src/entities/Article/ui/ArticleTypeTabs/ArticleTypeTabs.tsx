import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import cls from './ArticleTypeTabs.module.scss';

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
      content: t('ALL'),
    },
    {
      value: ArticleType.IT,
      content: t('IT'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('SCIENCE'),
    },
    {
      value: ArticleType.GEOGRAPHY,
      content: t('GEOGRAPHY'),
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
