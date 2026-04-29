import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends ComponentPropsWithoutRef<'span'> {
  size?: SpinnerSize;
  label?: string;
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = 'md', label = 'Carregando', className, ...rest }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cx(s.root, s[size], className)}
      {...rest}
    />
  ),
);
Spinner.displayName = 'Spinner';
