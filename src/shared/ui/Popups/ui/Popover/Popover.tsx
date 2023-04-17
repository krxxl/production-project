import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/types';
import cls from './Popover.module.scss';
import popupsCls from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover = memo(({
  className,
  direction = 'bottom right',
  trigger,
  children,
}: PopoverProps) => {
  const { t } = useTranslation();
  const itemsClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupsCls.Popup])}>
      <HPopover.Button className={popupsCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, itemsClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
