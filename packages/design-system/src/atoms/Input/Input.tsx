import { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Input.module.css';

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'id'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id, className, ...rest }, ref) => {
    const auto = useId();
    const inputId = id ?? auto;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errId = error ? `${inputId}-err` : undefined;
    const describedBy = [hintId, errId].filter(Boolean).join(' ') || undefined;
    return (
      <div className={cx(s.field, className)}>
        {label && (
          <label htmlFor={inputId} className={s.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          className={cx(s.input, error && s.invalid)}
          {...rest}
        />
        {hint && !error && (
          <span id={hintId} className={s.hint}>
            {hint}
          </span>
        )}
        {error && (
          <span id={errId} className={s.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
