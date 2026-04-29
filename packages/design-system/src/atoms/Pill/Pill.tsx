import { forwardRef, useEffect, useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cx } from '../../lib/cx';
import s from './Pill.module.css';

export interface PillProps extends ComponentPropsWithoutRef<'button'> {
  active?: boolean;
  aiSuggested?: boolean;
  pulseOnClick?: boolean;
}

export const Pill = forwardRef<HTMLButtonElement, PillProps>(
  (
    {
      active,
      aiSuggested,
      pulseOnClick = true,
      className,
      onClick,
      children,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const [pulse, setPulse] = useState(false);
    useEffect(() => {
      if (pulse) {
        const t = window.setTimeout(() => setPulse(false), 340);
        return () => window.clearTimeout(t);
      }
      return undefined;
    }, [pulse]);
    return (
      <button
        ref={ref}
        type={type}
        aria-pressed={active}
        data-ai={aiSuggested ? 'true' : undefined}
        className={cx(s.root, active && s.active, aiSuggested && s.ai, pulse && s.commit, className)}
        onClick={(e) => {
          if (pulseOnClick) setPulse(true);
          onClick?.(e);
        }}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Pill.displayName = 'Pill';
