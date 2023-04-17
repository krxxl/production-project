import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import IconNotification from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './notificationButton.module.scss';

interface notificationButtonProps {
  className?: string
}

export const NotificationButton = memo(({ className }: notificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={IconNotification} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.notificationButton, {}, [className])}
          trigger={trigger}
          direction="bottom left"
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
});
