import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './Eyebrow.module.css';

export type EyebrowProps = ComponentPropsWithoutRef<'span'>;

export const Eyebrow = forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.root, className)} {...rest} />
  ),
);
Eyebrow.displayName = 'Eyebrow';
