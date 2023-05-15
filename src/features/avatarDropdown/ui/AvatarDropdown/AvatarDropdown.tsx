import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { getUser, isAdmin, isManager, userActions } from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

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

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isAvailableAdminPanel
          ? [
              {
                label: t('Админка'),
                href: getRouteAdminPanel(),
              },
            ]
          : []),
        {
          label: t('Выйти'),
          onClick: onLogoutHandler,
        },
        {
          label: t('Профиль'),
          href: getRouteProfile(user.id),
        },
      ]}
      trigger={<Avatar fallbackInverted size={30} src={user.avatar} />}
      direction="bottom left"
    />
  );
});
