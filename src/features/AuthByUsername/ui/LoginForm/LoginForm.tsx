import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            gap="16"
            className={classNames(cls.LoginForm, {}, [className])}
          >
            <Text title={t('Форма авторизации')} />
            {error && (
              <Text
                text={t('Вы ввели неверный логин или пароль')}
                variant="error"
              />
            )}
            <Input
              autofocus
              type="text"
              className={cls.input}
              placeholder={t('Введите username')}
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              type="text"
              className={cls.input}
              placeholder={t('Введите пароль')}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              className={cls.loginBtn}
              onClick={onLoginHandler}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
        off={
          <form className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Авторизация')} />
            {error && (
              <TextDeprecated
                text={t('Не верный пароль или логин')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              onChange={onChangeUsername}
              autofocus
              placeholder={t('Логин')}
              className={cls.loginInput}
              value={username}
            />
            <InputDeprecated
              onChange={onChangePassword}
              placeholder={t('Пароль')}
              className={cls.loginInput}
              value={password}
            />
            <ButtonDeprecated
              className={cls.loginBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onLoginHandler}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </form>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
