import { Fragment, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/types';
import { NavLink } from '../../../NavLink/NavLink';
import cls from './Dropdown.module.scss';
import popupsCls from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface DropDownItem {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}
interface DropdownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = memo(({
  className,
  items,
  trigger,
  direction = 'bottom right',
}: DropdownProps) => {
  const itemsClasses = [mapDirectionClass[direction]];
  return (
    <Menu
      as="div"
      className={classNames(
        cls.Dropdown,
        {},
        [className, popupsCls.Popup],
      )}
    >
      <Menu.Button className={popupsCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items as="ul" className={classNames(cls.items, {}, itemsClasses)}>
        {items.map((item) => (
          <Menu.Item as={Fragment} key={item.label} disabled={item.disabled}>
            {({ active }) => {
              const mods: Mods = {
                [popupsCls.active]: active,
              };
              return (
                <li className={classNames(cls.item, mods, [])}>
                  {item.href ? (
                    <NavLink
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <button
                      type="button"
                      className={popupsCls.btn}
                      disabled={item.disabled}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              );
            }}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
});
