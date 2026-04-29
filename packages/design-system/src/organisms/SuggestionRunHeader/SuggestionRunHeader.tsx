import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './SuggestionRunHeader.module.css';

export interface SuggestionRunHeaderProps extends Omit<ComponentPropsWithoutRef<'header'>, 'title'> {
  title: ReactNode;
  meta?: ReactNode;
  trailing?: ReactNode;
}

export const SuggestionRunHeader = forwardRef<HTMLElement, SuggestionRunHeaderProps>(
  ({ title, meta, trailing, className, ...rest }, ref) => (
    <header ref={ref} className={cx(s.root, className)} {...rest}>
      <div className={s.head}>
        <span className={s.title}>{title}</span>
        {meta && <span className={s.meta}>{meta}</span>}
      </div>
      {trailing && <div className={s.right}>{trailing}</div>}
    </header>
  ),
);
SuggestionRunHeader.displayName = 'SuggestionRunHeader';
