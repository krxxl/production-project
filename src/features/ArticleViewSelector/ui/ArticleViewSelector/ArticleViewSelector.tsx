import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/listIcon.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiledIcon.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    Icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
  {
    view: ArticleView.SMALL,
    Icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const onClickHandler = (newView: ArticleView) => () => {
      onViewClick(newView);
    };
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
              className,
            ])}
            border="round"
          >
            <HStack gap="8">
              {viewTypes.map((viewType) => (
                <Icon
                  key={viewType.view}
                  clickable
                  onClick={onClickHandler(viewType.view)}
                  Svg={viewType.Icon}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                className={classNames(
                  '',
                  { [cls.notActive]: view === viewType.view },
                  [className],
                )}
                theme={ButtonTheme.CLEAR}
                onClick={onClickHandler(viewType.view)}
                key={viewType.view}
              >
                <IconDeprecated Svg={viewType.Icon} width={24} height={24} />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);
