import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(cls.Loader, {}, [className])}>
    <Spinner />
  </div>
);
