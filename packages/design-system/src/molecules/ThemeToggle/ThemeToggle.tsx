import { forwardRef } from 'react';
import { IconButton } from '../../atoms/IconButton';
import type { IconButtonProps } from '../../atoms/IconButton';
import { useTheme } from '../../hooks/useTheme';
import s from './ThemeToggle.module.css';

const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export type ThemeToggleProps = Omit<IconButtonProps, 'aria-label' | 'children' | 'onClick'> & {
  ariaLabel?: string;
};

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ ariaLabel = 'Alternar tema', size = 'md', ...rest }, ref) => {
    const { theme, toggle } = useTheme();
    return (
      <IconButton
        ref={ref}
        aria-label={ariaLabel}
        aria-pressed={theme === 'light'}
        size={size}
        onClick={toggle}
        {...rest}
      >
        <span className={theme === 'light' ? s.iconHidden : undefined}>
          <SunIcon />
        </span>
        <span className={theme === 'dark' ? s.iconHidden : undefined}>
          <MoonIcon />
        </span>
      </IconButton>
    );
  },
);
ThemeToggle.displayName = 'ThemeToggle';
