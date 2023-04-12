import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string
}

export const Spinner = memo(({ className }: SpinnerProps) => (
  <div className={classNames('lds-ring', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
));
