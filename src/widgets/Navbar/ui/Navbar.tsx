import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onLoginHandler = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const onLogoutHandler = useCallback(() => {
    dispatch(userActions.removeAuthdata());
  }, [dispatch]);

  if (user) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={onLogoutHandler} theme={ButtonTheme.CLEAR_INVERTED}>{t('Выйти')}</Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onLoginHandler} theme={ButtonTheme.CLEAR_INVERTED}>{t('Войти')}</Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onLoginHandler} />}
    </div>
  );
});
