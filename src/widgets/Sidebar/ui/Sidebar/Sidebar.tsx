import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { TranslateSwitcher } from '@/features/TranslateSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const sidebarItems = useSelector(getSidebarItems);
  const onCollapsedHandler = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className],
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <VStack role="navigation" gap="8" className={cls.links}>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
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
        </aside>
      }
    />
  );
});
