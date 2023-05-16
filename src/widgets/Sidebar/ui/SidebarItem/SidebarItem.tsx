import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink, NavLinkTheme } from '@/shared/ui/deprecated/NavLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUser } from '@/entities/User';
import { SidebarItemsType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';

interface SidebarItemProps {
  item: SidebarItemsType;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUser);
  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <NavLink
          theme={NavLinkTheme.PRIMARY}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </NavLink>
      }
    />
  );
});
