import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './Numeral.module.css';

export type NumeralSize = 'lg' | 'xl' | 'xxl';
export interface NumeralProps extends ComponentPropsWithoutRef<'span'> {
  size?: NumeralSize;
}
export const Numeral = forwardRef<HTMLSpanElement, NumeralProps>(
  ({ size = 'xl', className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.root, s[size], className)} {...rest} />
  ),
);
Numeral.displayName = 'Numeral';
