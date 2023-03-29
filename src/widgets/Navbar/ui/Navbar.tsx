import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userActions } from 'entities/User';
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink';
import { RoutePath } from 'shared/config/router/routeConfig';
import { Text, TextTheme } from 'shared/ui/Text/Text';
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
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text title={t('KR')} theme={TextTheme.INVERTED} className={cls.appTitle} />
        <NavLink
          to={RoutePath.article_new}
          theme={NavLinkTheme.SECONDARY}
          className={cls.createArticleBtn}
        >
          {t('Новая статья')}
        </NavLink>
        <Button
          className={cls.loginBtn}
          onClick={onLogoutHandler}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.loginBtn} onClick={onLoginHandler} theme={ButtonTheme.CLEAR_INVERTED}>{t('Войти')}</Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onLoginHandler} />}
    </header>
  );
});
