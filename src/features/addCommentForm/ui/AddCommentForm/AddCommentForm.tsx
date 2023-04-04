import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const defaultReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comment = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value || ''));
  }, [dispatch]);

  const onSendCommentHandler = useCallback(() => {
    onSendComment(comment || '');
    onCommentChange('');
  }, [comment, onCommentChange, onSendComment]);

  return (
    <DynamicModuleLoader reducers={defaultReducers}>
      <HStack max align="center" justify="space" className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={comment}
          onChange={onCommentChange}
          className={cls.comment}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendCommentHandler}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
