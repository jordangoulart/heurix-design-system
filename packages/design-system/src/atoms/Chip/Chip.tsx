import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Chip.module.css';

export type ConfidenceLevel = 'low' | 'medium' | 'high';

export interface ConfidenceChipProps extends ComponentPropsWithoutRef<'span'> {
  level: ConfidenceLevel;
  label: ReactNode;
}

const dotsForLevel: Record<ConfidenceLevel, number> = { low: 1, medium: 2, high: 3 };

export const ConfidenceChip = forwardRef<HTMLSpanElement, ConfidenceChipProps>(
  ({ level, label, className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.conf, className)} {...rest}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cx(s.dot, i < dotsForLevel[level] && s.dotOn)}
          data-on={i < dotsForLevel[level] ? 'true' : 'false'}
        />
      ))}
      {label}
    </span>
  ),
);
ConfidenceChip.displayName = 'ConfidenceChip';

export type SuggestionPriority = 'high' | 'medium' | 'low' | 'heuristic';

export interface SuggestionChipProps extends ComponentPropsWithoutRef<'span'> {
  priority: SuggestionPriority;
}

export const SuggestionChip = forwardRef<HTMLSpanElement, SuggestionChipProps>(
  ({ priority, className, ...rest }, ref) => (
    <span ref={ref} className={cx(s.sg, s[priority], className)} {...rest} />
  ),
);
SuggestionChip.displayName = 'SuggestionChip';
