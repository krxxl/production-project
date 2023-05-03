import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUser } from '@/entities/User';
import { NavLink, NavLinkTheme } from '@/shared/ui/NavLink';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleNew } from '@/shared/const/router';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const user = useSelector(getUser);

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onLoginHandler = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  if (user) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          title={t('KR')}
          theme={TextTheme.INVERTED}
          className={cls.appTitle}
        />
        <NavLink
          to={getRouteArticleNew()}
          theme={NavLinkTheme.SECONDARY}
          className={cls.createArticleBtn}
        >
          {t('Новая статья')}
        </NavLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.loginBtn}
        onClick={onLoginHandler}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onLoginHandler} />}
    </header>
  );
});
