import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './ScanBar.module.css';

export interface ScanBarProps extends ComponentPropsWithoutRef<'div'> {
  label?: string;
  paused?: boolean;
}

export const ScanBar = forwardRef<HTMLDivElement, ScanBarProps>(
  ({ label = 'Carregando', paused, className, ...rest }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-label={label}
      aria-busy={!paused}
      className={cx(s.root, paused && s.paused, className)}
      {...rest}
    />
  ),
);
ScanBar.displayName = 'ScanBar';
