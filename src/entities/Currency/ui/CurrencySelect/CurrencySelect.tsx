import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const props = {
      className,
      value,
      defaultValue: t('Укажите валюту'),
      label: t('Укажите валюту'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ListBox {...props} />}
        off={<ListBoxDeprecated {...props} />}
      />
    );
  },
);
