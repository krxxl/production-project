import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUser } from '@/entities/User';
import { NavLink, NavLinkTheme } from '@/shared/ui/deprecated/NavLink';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleNew } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Button } from '@/shared/ui/redesigned/Button';
import { toggleFeatures } from '@/shared/lib/features';

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (user) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(mainClass, {}, [className])}>
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
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            variant="clear"
            className={cls.loginBtn}
            onClick={onLoginHandler}
          >
            {t('Войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.loginBtn}
            onClick={onLoginHandler}
          >
            {t('Войти')}
          </ButtonDeprecated>
        }
      />
      {isOpen && <LoginModal isOpen={isOpen} onClose={onLoginHandler} />}
    </header>
  );
});
