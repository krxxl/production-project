import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus placeholder="Логин" className={cls.loginInput} />
      <Input placeholder="Пароль" className={cls.loginInput} />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
    </form>
  );
};
