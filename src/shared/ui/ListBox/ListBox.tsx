import { Fragment, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Listbox } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/types';
import { HStack } from '../Stack/HStack/HStack';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

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
        className={classNames(cls.ListBox, {}, [className])}
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
                  [cls.active]: active,
                  [cls.selected]: selected,
                  [cls.disabled]: item.disabled,
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
