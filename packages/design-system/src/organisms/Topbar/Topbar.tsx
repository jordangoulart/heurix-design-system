import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BrandMark } from '../../atoms/BrandMark';
import { cx } from '../../lib/cx';
import s from './Topbar.module.css';

export interface TopbarProps extends Omit<ComponentPropsWithoutRef<'header'>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  right?: ReactNode;
  showLiveDot?: boolean;
  showBrand?: boolean;
}

export const Topbar = forwardRef<HTMLElement, TopbarProps>(
  (
    {
      title = 'Heurix',
      subtitle,
      meta,
      right,
      showLiveDot = true,
      showBrand = true,
      className,
      ...rest
    },
    ref,
  ) => (
    <header ref={ref} className={cx(s.root, className)} {...rest}>
      <div className={s.brand}>
        {showBrand && <BrandMark size="md" />}
        {title && <strong className={s.title}>{title}</strong>}
        {subtitle && (
          <>
            <span className={s.divider}>/</span>
            <span className={s.subtitle}>{subtitle}</span>
          </>
        )}
      </div>
      <div className={s.right}>
        {meta && (
          <span className={s.meta}>
            {showLiveDot && <span className={s.metaDot} aria-hidden="true" />}
            {meta}
          </span>
        )}
        {right}
      </div>
    </header>
  ),
);
Topbar.displayName = 'Topbar';
