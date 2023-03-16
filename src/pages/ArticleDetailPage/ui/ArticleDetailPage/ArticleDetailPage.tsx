import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
  className?: string
}

const ArticleDetailPage = memo(({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('Нет такой статьи')}
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      <ArticleDetail id={id} />
    </div>
  );
});

export default ArticleDetailPage;
