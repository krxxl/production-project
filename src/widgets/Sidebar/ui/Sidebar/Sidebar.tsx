import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { TranslateSwitcher } from 'widgets/TranslateSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { VStack } from 'shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const sidebarItems = useSelector(getSidebarItems);
  const onCollapsedHandler = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <menu
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <VStack gap="8" className={cls.links}>
        {sidebarItems.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />)}
      </VStack>
      <Button
        data-testid="collapsed"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        onClick={onCollapsedHandler}
        className={cls.sidebarBtn}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <TranslateSwitcher short={collapsed} className={cls.translate} />
      </div>
    </menu>
  );
});
