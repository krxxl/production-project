import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Button } from '@/shared/ui/redesigned/Button';

interface TranslateSwitcherProps {
  className?: string;
  short?: boolean;
}

export const TranslateSwitcher = memo(
  ({ className, short = true }: TranslateSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onChangeLanguageHandler = async () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button variant="clear" onClick={onChangeLanguageHandler}>
            {t(short ? 'Короткий язык' : 'Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR}
            onClick={onChangeLanguageHandler}
            className={classNames('', {}, [className])}
          >
            {t(short ? 'Короткий язык' : 'Язык')}
          </ButtonDeprecated>
        }
      />
    );
  },
);
