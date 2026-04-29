import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Toast.module.css';

export type ToastTone = 'default' | 'error';

export interface ToastProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  tone?: ToastTone;
  message?: ReactNode;
  icon?: ReactNode;
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const AlertIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ tone = 'default', message, icon, className, children, ...rest }, ref) => {
    const defaultIcon = tone === 'error' ? <AlertIcon /> : <CheckIcon />;
    const hasIcon = icon !== null;
    return (
      <div
        ref={ref}
        role={tone === 'error' ? 'alert' : 'status'}
        aria-live={tone === 'error' ? 'assertive' : 'polite'}
        className={cx(s.root, tone === 'error' && s.error, className)}
        {...rest}
      >
        {hasIcon && <span className={s.icon}>{icon ?? defaultIcon}</span>}
        <span className={s.message}>{message ?? children}</span>
      </div>
    );
  },
);
Toast.displayName = 'Toast';
