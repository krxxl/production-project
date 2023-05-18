import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { getUser, isAdmin, isManager, userActions } from '@/entities/User';
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
  className?: string;
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

  const items = [
    ...(isAvailableAdminPanel
      ? [
          {
            label: t('Админка'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      label: t('Профиль'),
      href: getRouteProfile(user.id),
    },
    {
      label: t('Настройки'),
      href: getRouteSettings(),
    },
    {
      label: t('Выйти'),
      onClick: onLogoutHandler,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          direction="bottom left"
          className={classNames('', {}, [className])}
          items={items}
          trigger={<Avatar size={40} src={user.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          direction="bottom left"
          className={classNames('', {}, [className])}
          items={items}
          trigger={
            <AvatarDeprecated fallbackInverted size={30} src={user.avatar} />
          }
        />
      }
    />
  );
});
