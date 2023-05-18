import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUser } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { Button } from '@/shared/ui/redesigned/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  ({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUser);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" max>
            <HStack max justify="between" className={className}>
              <Text title={t('Профиль')} />
              {canEdit && (
                <div>
                  {readonly ? (
                    <Button
                      onClick={onEditHandler}
                      data-testid="EditableProfileCardHeader.EditButton"
                    >
                      {t('Редактировать')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        onClick={onCancelHandler}
                        data-testid="EditableProfileCardHeader.CancelButton"
                        color="error"
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        onClick={onSaveHandler}
                        data-testid="EditableProfileCardHeader.SaveButton"
                        color="success"
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
                </div>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack max justify="between">
            <TextDeprecated title={t('профиль')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditHandler}
                    data-testid="EditableProfileCardHeader.Edit"
                  >
                    {t('редактировать')}
                  </ButtonDeprecated>
                ) : (
                  <HStack gap="8">
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelHandler}
                      data-testid="EditableProfileCardHeader.Cancel"
                    >
                      {t('отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSaveHandler}
                      data-testid="EditableProfileCardHeader.Save"
                    >
                      {t('сохранить')}
                    </ButtonDeprecated>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    );
  },
);
