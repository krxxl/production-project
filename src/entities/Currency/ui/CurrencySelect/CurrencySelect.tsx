import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  onChange?: (value: Currency) => void;
  value?: Currency;
  readonly?: boolean;
}

const options = [
  {
    value: Currency.EUR,
    label: Currency.EUR,
  },
  {
    value: Currency.RUB,
    label: Currency.RUB,
  },
  {
    value: Currency.USD,
    label: Currency.USD,
  },
];

export const CurrencySelect = memo(({
  className, onChange, value, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label="Ваша валюта"
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
