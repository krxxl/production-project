import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import cls from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const defaultReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comment = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value || ''));
      },
      [dispatch],
    );

    const onSendCommentHandler = useCallback(() => {
      onSendComment(comment || '');
      onCommentChange('');
    }, [comment, onCommentChange, onSendComment]);

    return (
      <DynamicModuleLoader reducers={defaultReducers}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card padding="24" border="round" max>
              <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                gap="16"
                className={classNames(cls.AddCommentFormRedesigned, {}, [
                  className,
                ])}
              >
                <Input
                  className={cls.input}
                  placeholder={t('Введите текст комментария')}
                  value={comment}
                  data-testid="AddCommentForm.Input"
                  onChange={onCommentChange}
                />
                <Button
                  data-testid="AddCommentForm.Button"
                  onClick={onSendCommentHandler}
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </Card>
          }
          off={
            <HStack
              data-testid="AddCommentForm"
              max
              align="center"
              justify="between"
              className={classNames(cls.AddCommentForm, {}, [className])}
            >
              <InputDeprecated
                data-testid="AddCommentForm.Input"
                placeholder={t('Введите текст комментария')}
                value={comment}
                onChange={onCommentChange}
                className={cls.comment}
              />
              <ButtonDeprecated
                data-testid="AddCommentForm.Button"
                theme={ButtonTheme.OUTLINE}
                onClick={onSendCommentHandler}
              >
                {t('Отправить')}
              </ButtonDeprecated>
            </HStack>
          }
        />
      </DynamicModuleLoader>
    );
  },
);

export default AddCommentForm;
