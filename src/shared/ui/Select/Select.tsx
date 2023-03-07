import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface Option {
  value: string;
  label: string
}
interface SelectProps {
  className?: string;
  label?: string;
  options?: Option[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectProps) => {
  const { t } = useTranslation();

  const optionList = useMemo(() => (
    options?.map(({ label, value }) => (
      <option key={value} value={value} className={cls.option}>
        {label}
      </option>
    ))), [options]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});
