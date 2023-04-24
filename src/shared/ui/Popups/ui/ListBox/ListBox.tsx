import { Fragment, memo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/types';
import { HStack } from '../../../Stack/HStack/HStack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}
interface ListBoxProps {
  className?: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const ListBox = memo(({
  className,
  options,
  label,
  value,
  readonly = false,
  onChange,
  direction = 'bottom right',
}: ListBoxProps) => {
  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HStack gap="8">
      {label && <span>{label}</span>}
      <Listbox
        as="div"
        disabled={readonly}
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className, popupsCls.Popup])}
      >
        <Listbox.Button className={classNames(cls.trigger, { [cls.disabled]: readonly }, [])}>
          {value || label}
        </Listbox.Button>
        <Listbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {options.map((item) => (
            <Listbox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => {
                const mods: Mods = {
                  [popupsCls.active]: active,
                  [popupsCls.selected]: selected,
                  [popupsCls.disabled]: item.disabled,
                };
                return (
                  <li className={classNames(cls.item, mods, [])}>
                    {item.value}
                  </li>
                );
              }}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>
  );
});