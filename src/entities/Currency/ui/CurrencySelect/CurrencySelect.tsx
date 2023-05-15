import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/consts/consts';

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

export const CurrencySelect = memo(
  ({ className, onChange, value, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        className={classNames('', {}, [className])}
        label={t('Ваша валюта')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
        direction="top right"
      />
    );
  },
);
