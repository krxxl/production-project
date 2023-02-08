import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './TranslateSwitcher.module.scss';

interface TranslateSwitcherProps {
  className?: string
}

export const TranslateSwitcher: FC<TranslateSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onChangeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onChangeLanguageHandler}
      className={classNames(cls.TranslateSwitcher, {}, [className])}
    >
      {t('Русский')}
    </Button>
  );
};
