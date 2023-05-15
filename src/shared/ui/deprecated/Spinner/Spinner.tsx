import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Spinner = memo(({ className }: SpinnerProps) => (
  <div className={classNames('lds-ring', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
));
