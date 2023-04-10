import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationApi';

interface ArticleRecommendationsListProps {
    className?: string;
}
export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles } = useArticleRecommendationsList(3);

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      <Text size={TextSize.SIZE_L} title={t('Рекомандации')} />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        target="_blank"
      />
    </VStack>
  );
});
