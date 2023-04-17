import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import IconNotification from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './notificationButton.module.scss';

interface notificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: notificationButtonProps) => {
  const { t } = useTranslation();
  return (
    <Popover
      className={classNames(cls.notificationButton, {}, [className])}
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={IconNotification} inverted />
        </Button>
      )}
      direction="bottom left"
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
