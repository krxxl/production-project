import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router';
import { RoutePath } from 'shared/config/router/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import {
  getArticleDetailCanEdit,
} from '../../model/selectors/getArticleDetailCanEdit/getArticleDetailCanEdit';

interface ArticleDetailPageHeaderProps {
  className?: string
}

export const ArticleDetailPageHeader = memo(({ className }: ArticleDetailPageHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getArticleDetailCanEdit);
  const article = useSelector(getArticleDetailData);

  const onBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onEdit = useCallback(() => {
    navigate(`${RoutePath.article_detail}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack max justify="space" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>{t('Назад')}</Button>
      {canEdit && (
        <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
      )}
    </HStack>
  );
});
