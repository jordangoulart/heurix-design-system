import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AIBadge } from '../../atoms/AIBadge';
import { cx } from '../../lib/cx';
import s from './AIBlock.module.css';

export interface AIBlockProps extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title?: ReactNode;
  meta?: ReactNode;
}

export const AIBlock = forwardRef<HTMLElement, AIBlockProps>(
  ({ title, meta, className, children, ...rest }, ref) => (
    <section ref={ref} className={cx(s.root, className)} {...rest}>
      <header className={s.head}>
        <AIBadge />
        {title && <span className={s.title}>{title}</span>}
        {meta && <span style={{ marginLeft: 'auto' }}>{meta}</span>}
      </header>
      <div className={s.body}>{children}</div>
    </section>
  ),
);
AIBlock.displayName = 'AIBlock';
