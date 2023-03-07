import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEditHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('профиль')} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditHandler}
        >
          {t('редактировать')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.cancelBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelHandler}
          >
            {t('отменить')}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSaveHandler}
          >
            {t('сохранить')}
          </Button>
        </>
      )}
    </div>
  );
});
