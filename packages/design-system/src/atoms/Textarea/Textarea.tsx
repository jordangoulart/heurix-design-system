import { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Textarea.module.css';

export interface TextareaProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'id'> {
  label?: ReactNode;
  id?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className, ...rest }, ref) => {
    const auto = useId();
    const taId = id ?? auto;
    return (
      <div className={cx(s.field, className)}>
        {label && (
          <label htmlFor={taId} className={s.label}>
            {label}
          </label>
        )}
        <textarea ref={ref} id={taId} className={s.textarea} {...rest} />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';
