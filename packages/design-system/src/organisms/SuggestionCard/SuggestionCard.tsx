import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './SuggestionCard.module.css';

export interface SuggestionCardProps extends Omit<ComponentPropsWithoutRef<'article'>, 'title'> {
  title: ReactNode;
  chips?: ReactNode;
  footer?: ReactNode;
}

export const SuggestionCard = forwardRef<HTMLElement, SuggestionCardProps>(
  ({ title, chips, footer, className, children, ...rest }, ref) => (
    <article ref={ref} className={cx(s.root, className)} {...rest}>
      <header className={s.head}>
        {chips}
        <span className={s.title}>{title}</span>
      </header>
      <div className={s.body}>{children}</div>
      {footer && <footer className={s.foot}>{footer}</footer>}
    </article>
  ),
);
SuggestionCard.displayName = 'SuggestionCard';
