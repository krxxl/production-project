import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/router/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import {
  getUser, isAdmin, isManager, userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isAdminRole = useSelector(isAdmin);
  const isManagerRole = useSelector(isManager);
  const { t } = useTranslation();
  const onLogoutHandler = useCallback(() => {
    dispatch(userActions.removeAuthdata());
  }, [dispatch]);

  const isAvailableAdminPanel = isAdminRole || isManagerRole;

  if (!user) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isAvailableAdminPanel ? [{
          label: t('Админка'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          label: t('Выйти'),
          onClick: onLogoutHandler,
        },
        {
          label: t('Профиль'),
          href: RoutePath.profile + user.id,
        },
      ]}
      trigger={<Avatar size={30} src={user.avatar} />}
      direction="bottom left"
    />
  );
});
