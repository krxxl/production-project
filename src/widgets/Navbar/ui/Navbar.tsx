import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUser, isAdmin, isManager, userActions,
} from 'entities/User';
import { NavLink, NavLinkTheme } from 'shared/ui/NavLink/NavLink';
import { RoutePath } from 'shared/config/router/routeConfig';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isAdminRole = useSelector(isAdmin);
  const isManagerRole = useSelector(isManager);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onLoginHandler = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const onLogoutHandler = useCallback(() => {
    dispatch(userActions.removeAuthdata());
  }, [dispatch]);

  const isAvailableAdminPanel = isAdminRole || isManagerRole;

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
        <Dropdown
          items={[
            ...(isAvailableAdminPanel ? [{
              label: t('Админка'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              label: t('Выйти'),
              onClick: onLogoutHandler,
            },
            {
              label: t('Профиль'),
              href: RoutePath.profile + user.id,
            },
          ]}
          trigger={<Avatar size={30} src={user.avatar} />}
          className={cls.loginBtn}
          direction="bottom left"
        />
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
