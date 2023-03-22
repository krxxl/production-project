import { memo } from 'react';
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';
import { SidebarItemsType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemsType,
  collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed } : SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUser);
  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <NavLink
      theme={NavLinkTheme.PRIMARY}
      to={item.path}
      className={classNames(
        cls.link,
        { [cls.collapsed]: collapsed },
        [],
      )}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.title}>{t(item.text)}</span>
    </NavLink>
  );
});
