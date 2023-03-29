import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/router/routeConfig';
import { NavLink } from 'react-router-dom';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

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
      <div className={classNames(cls.ArticleListItem, {}, [className, cls.big])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          <Text className={cls.types} text={article.type?.join(', ')} />
          <img src={article.img} alt={article.title} className={cls.image} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.desc} />
          )}
          <div className={cls.footer}>
            <NavLink target={target} to={RoutePath.article_detail + article.id}>
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
      target={target}
      to={RoutePath.article_detail + article.id}
      className={classNames(cls.ArticleListItem, {}, [className, cls.small])}
    >
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
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
