import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;

  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <HStack gap="8" max className={classNames('', mods, [className])}>
      {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={readonly}
        {...otherProps}
      />
    </HStack>
  );
});
