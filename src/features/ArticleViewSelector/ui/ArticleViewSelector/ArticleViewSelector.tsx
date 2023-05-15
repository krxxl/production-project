import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/listIcon.svg';
import TiledIcon from '@/shared/assets/icons/tiledIcon.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    Icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    Icon: TiledIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const onClickHandler = (newView: ArticleView) => () => {
      onViewClick(newView);
    };
    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            className={classNames(
              '',
              { [cls.notActive]: view === viewType.view },
              [className],
            )}
            theme={ButtonTheme.CLEAR}
            onClick={onClickHandler(viewType.view)}
            key={viewType.view}
          >
            <Icon Svg={viewType.Icon} width={24} height={24} />
          </Button>
        ))}
      </div>
    );
  },
);
