import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Sentinel.module.css';

export interface SentinelProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}

export const Sentinel = forwardRef<HTMLDivElement, SentinelProps>(
  ({ children = 'Fim da lista', className, ...rest }, ref) => (
    <div ref={ref} className={cx(s.root, className)} {...rest}>
      <span className={s.line} aria-hidden="true" />
      {children}
      <span className={s.line} aria-hidden="true" />
    </div>
  ),
);
Sentinel.displayName = 'Sentinel';
