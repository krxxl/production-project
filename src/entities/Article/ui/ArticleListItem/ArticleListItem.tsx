import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eyeIcon.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';
import { getRouteArticleDetail } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
  className,
  article,
  view,
  isLoading,
  target,
}: ArticleListItemProps) => {
  const { t } = useTranslation();

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <div data-testid="ArticleListItem" className={classNames(cls.ArticleListItem, {}, [className, cls.big])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          <Text className={cls.types} text={article.type?.join(', ')} />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.desc} />
          )}
          <div className={cls.footer}>
            <NavLink target={target} to={getRouteArticleDetail(article.id)}>
              <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
            </NavLink>
            <Text className={cls.views} text={article.views?.toString()} />
            <Icon Svg={EyeIcon} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <NavLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetail(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls.small])}
    >
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.info}>
          <Text className={cls.types} text={article.type?.join(', ')} />
          <Text className={cls.views} text={article.views?.toString()} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </NavLink>
  );
});
