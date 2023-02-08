import {FC, useState} from "react";
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {TranslateSwitcher} from "shared/ui/TranslateSwitcher/TranslateSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onCollapsedHandler = () => {
    setCollapsed(prevState => !prevState)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onCollapsedHandler}>show</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <TranslateSwitcher className={cls.translate}/>
      </div>
    </div>
  );
};
