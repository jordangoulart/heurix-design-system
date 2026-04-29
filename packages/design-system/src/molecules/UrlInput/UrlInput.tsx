import { forwardRef, useId, useMemo } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './UrlInput.module.css';

const LinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export interface UrlInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'type'> {
  label?: ReactNode;
  error?: ReactNode;
  id?: string;
}

function isValidUrl(value: unknown): boolean {
  if (typeof value !== 'string' || value.length < 10) return false;
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export const UrlInput = forwardRef<HTMLInputElement, UrlInputProps>(
  ({ label, error, id, className, placeholder = 'https://staging.example.com/checkout', value, defaultValue, ...rest }, ref) => {
    const auto = useId();
    const inputId = id ?? auto;
    const errId = error ? `${inputId}-err` : undefined;
    const valid = useMemo(() => isValidUrl(value ?? defaultValue), [value, defaultValue]);
    return (
      <div className={cx(s.field, className)}>
        {label && (
          <label htmlFor={inputId} className={s.label}>
            {label}
          </label>
        )}
        <div className={s.wrap}>
          <span className={cx(s.icon, valid && s.valid)}>
            <LinkIcon />
          </span>
          <input
            ref={ref}
            id={inputId}
            type="url"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={errId}
            className={cx(s.input, error && s.invalid)}
            {...rest}
          />
        </div>
        {error && (
          <span id={errId} className={s.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);
UrlInput.displayName = 'UrlInput';
