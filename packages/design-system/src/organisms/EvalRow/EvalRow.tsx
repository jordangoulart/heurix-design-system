import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './EvalRow.module.css';

export interface EvalRowProps extends Omit<ComponentPropsWithoutRef<'button'>, 'title'> {
  url: string;
  title: ReactNode;
  score?: ReactNode;
  status?: ReactNode;
  trailing?: ReactNode;
}

export const EvalRow = forwardRef<HTMLButtonElement, EvalRowProps>(
  ({ url, title, score, status, trailing, className, type = 'button', ...rest }, ref) => (
    <button ref={ref} type={type} className={cx(s.root, className)} {...rest}>
      <div className={s.meta}>
        <span className={s.url} title={url}>
          {url}
        </span>
        <span className={s.title}>{title}</span>
      </div>
      {status}
      {score && <span className={s.score}>{score}</span>}
      {trailing}
    </button>
  ),
);
EvalRow.displayName = 'EvalRow';
