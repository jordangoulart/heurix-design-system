import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './Kbd.module.css';

export interface KbdProps extends ComponentPropsWithoutRef<'kbd'> {
  onAccent?: boolean;
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ onAccent, className, ...rest }, ref) => (
    <kbd ref={ref} className={cx(s.root, onAccent && s.onAccent, className)} {...rest} />
  ),
);
Kbd.displayName = 'Kbd';
