import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface TranslateSwitcherProps {
  className?: string,
  short?: boolean
}

export const TranslateSwitcher = memo(({
  className,
  short = true,
}: TranslateSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onChangeLanguageHandler = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onChangeLanguageHandler}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});
