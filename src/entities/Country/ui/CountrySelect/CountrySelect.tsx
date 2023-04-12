import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
  className?: string;
  onChange?: (value: Country) => void;
  value?: Country;
  readonly?: boolean;
}

const options = [
  {
    value: Country.USA,
    label: Country.USA,
  },
  {
    value: Country.MONACO,
    label: Country.MONACO,
  },
  {
    value: Country.RUSSIA,
    label: Country.RUSSIA,
  },
];

export const CountrySelect = memo(({
  className, onChange, value, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('Ваша страна')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
