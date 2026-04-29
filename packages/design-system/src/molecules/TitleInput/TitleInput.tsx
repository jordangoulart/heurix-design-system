import { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './TitleInput.module.css';

export interface TitleInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'id'> {
  ariaLabel: string;
  id?: string;
}

export const TitleInput = forwardRef<HTMLInputElement, TitleInputProps>(
  ({ ariaLabel, id, className, placeholder = 'Sem título', ...rest }, ref) => {
    const auto = useId();
    return (
      <input
        ref={ref}
        id={id ?? auto}
        aria-label={ariaLabel}
        type="text"
        spellCheck={false}
        placeholder={placeholder}
        className={cx(s.input, className)}
        {...rest}
      />
    );
  },
);
TitleInput.displayName = 'TitleInput';
