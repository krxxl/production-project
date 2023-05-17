import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eyeIcon.svg';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleView, ArticleBlockType } from '../../../model/consts/consts';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetail } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks?.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls.big])}
      >
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
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее...')}
              </Button>
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
