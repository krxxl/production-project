import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const isEditable = Boolean(id);
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEditable ? (
        <>{t('Article Edit Page')}</>
      ) : (
        <>{t('Article New Page')}</>
      )}
    </Page>
  );
});

export default ArticleEditPage;
