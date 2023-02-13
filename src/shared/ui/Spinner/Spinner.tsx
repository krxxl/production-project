import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={classNames('lds-ring', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
