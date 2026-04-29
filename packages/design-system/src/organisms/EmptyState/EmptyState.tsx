import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './EmptyState.module.css';

export interface EmptyStateProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  icon?: ReactNode;
  title: ReactNode;
  message?: ReactNode;
  actions?: ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, message, actions, className, ...rest }, ref) => (
    <div ref={ref} className={cx(s.root, className)} {...rest}>
      {icon && <span className={s.icon} aria-hidden="true">{icon}</span>}
      <h4 className={s.title}>{title}</h4>
      {message && <p className={s.message}>{message}</p>}
      {actions && <div className={s.actions}>{actions}</div>}
    </div>
  ),
);
EmptyState.displayName = 'EmptyState';
