import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './CountBadge.module.css';

export interface CountBadgeProps extends ComponentPropsWithoutRef<'span'> {
  value: number;
  withDot?: boolean;
}

export const CountBadge = forwardRef<HTMLSpanElement, CountBadgeProps>(
  ({ value, withDot, className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.root, className)} {...rest}>
      {withDot && <span className={s.dot} aria-hidden="true" />}
      {value}
    </span>
  ),
);
CountBadge.displayName = 'CountBadge';
