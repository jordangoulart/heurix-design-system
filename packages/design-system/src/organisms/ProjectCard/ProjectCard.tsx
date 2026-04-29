import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './ProjectCard.module.css';

export interface ProjectCardProps extends Omit<ComponentPropsWithoutRef<'button'>, 'title'> {
  url: string;
  title: ReactNode;
  meta?: ReactNode;
  trailing?: ReactNode;
}

export const ProjectCard = forwardRef<HTMLButtonElement, ProjectCardProps>(
  ({ url, title, meta, trailing, className, type = 'button', ...rest }, ref) => (
    <button ref={ref} type={type} className={cx(s.root, className)} {...rest}>
      <div className={s.head}>
        <span className={s.url} title={url}>
          {url}
        </span>
        {trailing}
      </div>
      <div className={s.title}>{title}</div>
      {meta && <div className={s.meta}>{meta}</div>}
    </button>
  ),
);
ProjectCard.displayName = 'ProjectCard';
