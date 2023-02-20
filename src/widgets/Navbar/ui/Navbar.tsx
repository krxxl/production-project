import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onLoginHandler = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onLoginHandler} theme={ButtonTheme.CLEAR_INVERTED}>{t('Войти')}</Button>
      <Modal isOpen={isOpen} onClose={onLoginHandler}>
        {t('Войти')}
      </Modal>
    </div>
  );
};
