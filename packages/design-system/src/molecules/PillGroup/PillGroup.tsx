import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './PillGroup.module.css';

export interface PillGroupProps extends ComponentPropsWithoutRef<'div'> {
  label?: string;
  children: ReactNode;
}

export const PillGroup = forwardRef<HTMLDivElement, PillGroupProps>(
  ({ label, className, children, ...rest }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-label={label}
      className={cx(s.root, className)}
      {...rest}
    >
      {children}
    </div>
  ),
);
PillGroup.displayName = 'PillGroup';
