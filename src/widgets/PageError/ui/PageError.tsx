import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReloadHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button onClick={onReloadHandler} theme={ButtonTheme.CLEAR}>
        {t('Обновить')}
      </Button>
    </div>
  );
});
