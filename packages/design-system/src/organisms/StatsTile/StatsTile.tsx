import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './StatsTile.module.css';

export interface StatsTileProps extends ComponentPropsWithoutRef<'div'> {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  helper?: ReactNode;
}

export const StatsTile = forwardRef<HTMLDivElement, StatsTileProps>(
  ({ label, value, unit, helper, className, ...rest }, ref) => (
    <div ref={ref} className={cx(s.tile, className)} {...rest}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>
        {value}
        {unit && <span className={s.unit}>{unit}</span>}
      </span>
      {helper && <span className={s.helper}>{helper}</span>}
    </div>
  ),
);
StatsTile.displayName = 'StatsTile';

export interface StatsGridProps extends ComponentPropsWithoutRef<'div'> {
  cols?: 2 | 3;
}

export const StatsGrid = forwardRef<HTMLDivElement, StatsGridProps>(
  ({ cols = 3, className, ...rest }, ref) => (
    <div ref={ref} className={cx(s.grid, s[`cols-${cols}`], className)} {...rest} />
  ),
);
StatsGrid.displayName = 'StatsGrid';
