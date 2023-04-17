import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabsItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string
  tabs: TabsItem[];
  value: string;
  onTabClick: (tab: TabsItem) => void;
}

export const Tabs = memo(({
  className,
  tabs,
  value,
  onTabClick,
}: TabsProps) => {
  const clickHandler = useCallback((tab: TabsItem) => () => onTabClick(tab), [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          className={cls.tab}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
