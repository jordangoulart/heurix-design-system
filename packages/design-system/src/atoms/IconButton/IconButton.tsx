import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './IconButton.module.css';

type Tone = 'neutral' | 'danger';
type Size = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'aria-label'> {
  'aria-label': string;
  size?: Size;
  tone?: Tone;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = 'md', tone = 'neutral', className, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cx(s.root, s[size], tone === 'danger' && s.danger, className)}
      {...rest}
    />
  ),
);
IconButton.displayName = 'IconButton';
