import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './AIBadge.module.css';

export interface AIBadgeProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
}

export const AIBadge = forwardRef<HTMLSpanElement, AIBadgeProps>(
  ({ children = 'AI', className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.root, className)} {...rest}>
      <span className={s.dot} aria-hidden="true" />
      {children}
    </span>
  ),
);
AIBadge.displayName = 'AIBadge';
