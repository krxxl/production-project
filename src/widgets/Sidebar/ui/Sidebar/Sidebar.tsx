import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {
  TranslateSwitcher,
} from 'shared/ui/TranslateSwitcher/TranslateSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onCollapsedHandler = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <Button data-testid="collapsed" theme={ButtonTheme.CLEAR} onClick={onCollapsedHandler}>
        {collapsed ? t('Показать') : t('Скрыть')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <TranslateSwitcher className={cls.translate} />
      </div>
    </div>
  );
};
