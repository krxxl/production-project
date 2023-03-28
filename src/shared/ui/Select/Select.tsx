import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface Option<T extends string> {
  value: T;
  label: string
}
interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: Option<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className, label, options, value, onChange, readonly,
}: SelectProps<T>) => {
  const { t } = useTranslation();

  const optionList = useMemo(() => (
    options?.map(({ label, value }) => (
      <option key={value} value={value} className={cls.option}>
        {label}
      </option>
    ))), [options]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  const mods: Mods = {};
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>
          {label}
        </span>
      )}
      <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  );
};
