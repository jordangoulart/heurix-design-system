import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './BrandMark.module.css';

export type BrandMarkSize = 'sm' | 'md' | 'lg';
export interface BrandMarkProps extends Omit<ComponentPropsWithoutRef<'span'>, 'children'> {
  size?: BrandMarkSize;
  label?: string;
  glyph?: ReactNode;
}

export const BrandMark = forwardRef<HTMLSpanElement, BrandMarkProps>(
  ({ size = 'md', label = 'Heurix', glyph = 'h', className, ...rest }, ref) => (
    <span
      ref={ref}
      role="img"
      aria-label={label}
      className={cx(s.root, s[size], className)}
      {...rest}
    >
      <span aria-hidden="true">{glyph}</span>
    </span>
  ),
);
BrandMark.displayName = 'BrandMark';
